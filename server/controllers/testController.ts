// const {
//   SchemasClient,
//   DescribeSchemaCommand,
// } = require('@aws-sdk/client-schemas');
import { SchemasClient, DescribeSchemaCommand, DescribeSchemaCommandOutput } from '@aws-sdk/client-schemas';
//const { defaultProvider } = require('@aws-sdk/credential-provider-node');
import { defaultProvider } from '@aws-sdk/credential-provider-node'
import { Request, Response, NextFunction } from 'express';

import {
  LambdaClient,
  InvokeCommand,
  GetLayerVersionByArnCommand, GetLayerVersionByArnCommandOutput, 
  GetFunctionCommand, GetFunctionCommandOutput, 
  UpdateFunctionConfigurationCommand,
} from '@aws-sdk/client-lambda'

//const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');
import { STSClient, AssumeRoleCommand, AssumeRoleCommandOutput } from '@aws-sdk/client-sts'

//const ErrorMessage = require('../models/notificationModel');
import ErrorMessage from '../models/notificationModel';
import { IError } from '../models/notificationModel';
import HistoryLog from '../models/historyLogModel';
import { IHistory } from '../models/historyLogModel';


//const User = require('../models/userModel');
import User from '../models/userModel';

// OSP Account connection
// const lambdaClient = new LambdaClient({
//   region: 'us-east-1',
//   credentials: defaultProvider(),
// });

// const schemasClient = new SchemasClient({
  //   region: 'us-east-1',
  //   credentials: defaultProvider(),
  // });
  let lambdaClient: LambdaClient;
  let schemasClient: SchemasClient;
  const testController = {

   // Begin: To connect to users' AWS accounts
   assumeRole: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const stsClient: STSClient = new STSClient({
            region: 'us-east-1',
        });
        const roleToAssume: {RoleArn: string, RoleSessionName: string} = {
            //RoleArn has to end in /OSPTool
            //'arn:aws:iam::082338669350:role/OSPTool'
            RoleArn: req.cookies.ARN,
            //RoleArn: ARN,
            RoleSessionName: 'TestControllerSession',
        };
        const layerName: string = req.body.layerName;
        res.locals.layerName = layerName;
        
        const command: AssumeRoleCommand = new AssumeRoleCommand(roleToAssume);
        const { Credentials } = await stsClient.send(command) as AssumeRoleCommandOutput;
        
        
        const tempCredentials: {accessKeyId: string, secretAccessKey: string, sessionToken: string} = {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
        }
        
        lambdaClient = new LambdaClient({
          region: 'us-east-1',
          credentials: tempCredentials,
        });
        
        schemasClient = new SchemasClient({
          region: 'us-east-1',
          credentials: tempCredentials,
        });
        return next();

    } catch (err) {
        // return next(res.status(500).json({ error: 'Failed to assume role' }));
        return next({
          log:
            `Failed to assume role. Error: ${err}`,
          status: 500,
          //basic message to user
          message: {err: 'Failed to assume role'},
        })
    }
    // End: To connect to users' AWS accounts
},


  // Middleware that tests runtime compatibility between layers and functions
  testRuntime: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    // initialize an array of funcs that have compatible runtimes, will be passed to next middleware
    const passFuncs: string[] = [];
    // initialize an array of funcs that don't have comptable runtimes, will be saved on res.locals
    // to display on the front end
    const failFuncs: string[] = [];
    // deconstructs the Layer ARN and the selected functions sent in the req.body
    const ARN: string = req.body.ARN;
    const functionArray: string[] = req.body.functionArray
    // gets info about a specfic layer version
    const getLayerVersionCommand: GetLayerVersionByArnCommand = new GetLayerVersionByArnCommand({ Arn: ARN });
    const getLayerResponse: GetLayerVersionByArnCommandOutput = await lambdaClient.send(getLayerVersionCommand);
    /* //getLayerReponse Example: 
    {
    MetaData: {...},
    CompatibleRuntimes: [ 'nodejs18.x' ],
    Content: {...},
    CreatedDate: '2023-09-13T17:58:15.777+0000',
    Description: 'We need 6 different total layers for edgecase',
    LayerArn: 'arn:aws:lambda:us-east-1:082338669350:layer:GregLayer',
    LayerVersionArn: 'arn:aws:lambda:us-east-1:082338669350:layer:GregLayer:1',
    Version: 1
    }
  */
    const layerRuntime: string[] | undefined = getLayerResponse.CompatibleRuntimes;
    // a property on res.locals that will store all of the errors we catch along our middlewares
    res.locals.addError = [];

    //helper function, using map line 130, iterate over Function name array checking runtime compatibility
    const runTimeFunction = async (element: string): Promise<void> => {
      try {
        // gets info about the function configuration, including compatible runtimes
        const getFunctionCommand: GetFunctionCommand = new GetFunctionCommand({
          FunctionName: element,
        });
        const getFunctionResponse: GetFunctionCommandOutput = await lambdaClient.send(getFunctionCommand);
        const functionRuntime: string = getFunctionResponse.Configuration.Runtime;

        // if layer runtime and function runtime match
        if (layerRuntime.includes(functionRuntime)) {
          // push func to passed
          passFuncs.push(element);

        } else {
          await ErrorMessage.create({message: `${element} does not have the correct runtime`, ARN: req.cookies['ARN']}) as IError;
          // add error to locals and push func to failed
          res.locals.addError.push(
            `${element} does not have the correct runtime`
          );

          failFuncs.push(element);
        }
      } catch (error) {
        return next({
          log:
            `there was a problem in testController.testRuntime. Error: ${error}`,
          status: 400,
          message: { err: 'Problem testing runtime' },
        });
      }
    };
    // stored funcs that pass and fail onto locals
    res.locals.passedRuntime = passFuncs;
    res.locals.failRuntime = failFuncs;
    try {
      // resolve all promises before going to next
      await Promise.all(functionArray.map(async (func) => runTimeFunction(func)));
      return next();
    } catch (error) {
      return res.status(403).send(error.message);
    }
  },

  // Middleware to get all shareable tests asssociated with a function
  getTest: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // pull func names that pass initial runtime compatibility tests
    const funcNames: string[] = res.locals.passedRuntime;
    // initialize locals array to store funcs that have no shareable tests or fail tests
    res.locals.failedFunctions = [];
    try {
      // schemaData will be an array that holds the tests of each function in funcNames
      // if a function has no tests, null will be returned in its place in the array
      const schemaData: any = await Promise.all(
        funcNames.map(async (funcName) => {
          try {
            const input = {
              RegistryName: 'lambda-testevent-schemas',
              SchemaName: `_${funcName}-schema`,
            };
            const command: DescribeSchemaCommand = new DescribeSchemaCommand(input);
            const response: DescribeSchemaCommandOutput = await schemasClient.send(command);
            const data: any = JSON.parse(response.Content);
            const dataComp: any = data.components.examples;
            // dataComp is the shareable tests associated with a function, will be an array
            return dataComp;
          } catch {
            await ErrorMessage.create({message: `No shareable tests available for ${funcName}`, ARN: req.cookies['ARN']}) as IError;
            // if no shareable tests, push to errors and failed funcs
            // also return null to the schemaData array
            res.locals.addError.push(
              `No shareable tests available for ${funcName}`
            );
            res.locals.failedFunctions.push(funcName);
            return null;
          }
        })
      );

      // filter out schemaData that is null
      // only sends schemaData for funcs that have shareable tests
      res.locals.schemaData = schemaData.filter((item: any) => item !== null);
      next();
    } catch (error) {
      return next({
        log: (`there was a problem in testController.getTest. Error:  ${error}`),
        status: 400,
        message: { err: 'Problem getting test' },
      });
      
    }
  },

  // Middleware to test of the dependecies in a layer are comptabile with the function
  testDependencies: async (req: Request, res: Response, next: NextFunction) => {
    const funcNames: string[] = res.locals.passedRuntime;
    const listOfTests: any = res.locals.schemaData;
    /*
    res.locals.passedRuntime (funcNames) stores the array of function names, in order. eg [ 'createAccount', 'getAccountBalance' ]
    res.locals.schemaData (listOfTests) stores the array of function test payloads, in order. each function gets an object like {firstTestName: {value: test payload}, secondTestName: {value: test payload}}
    eg [{"1stShareableTest":{"value":{"AcctNo":"12346"}},"2ndShareableEvent":{"value":{"AcctNo":"12347"}}},{"3rdSharebableTest":{"value":{"AcctNo":"12345"}}}]
    console.log(listOfTests)
  */
    // initialize empty array to store funcs that pass all shareable tests
    const passedFuncs: string[] = [];

    const dependenciesFunction = async (element: string, index: number) => {
      try {
        //Deconstruct the Layer ARN(string) and functionArray from the request body
        const ARN: string = req.body.ARN
        // iterate over tests and extract the payload "value" which will be the tests
        for (const key in listOfTests[index]) {
          const payload: any = listOfTests[index][key].value;
          const lambdaInput = {
            FunctionName: element,
            Payload: JSON.stringify(payload),
          };
          // will invoke the function with the test
          const command = new InvokeCommand(lambdaInput);
          const response = await lambdaClient.send(command);
          
          // if the function fails the test
          if (response.FunctionError) {
            // push the function name to failedFunctions array, initialized on line 142
            res.locals.failedFunctions.push(lambdaInput.FunctionName);
            const failedFuncName: string = lambdaInput.FunctionName;
            const errorType: string = response.Payload.transformToString();
            const errorParse: any = JSON.parse(errorType);
            const messageToUser: string = `Error linking ${failedFuncName} to layer ${ARN}. Please fix the following: ${errorParse.errorMessage}.`;
            await ErrorMessage.create({message: messageToUser, ARN: req.cookies['ARN']}) as IError;
            // push the constructed error message to addError array, initialized on line 92
            res.locals.addError.push(messageToUser);
            
          } else {
            // push passing funcs to arr
            if (!passedFuncs.includes(element)) {
              await HistoryLog.create({message: `${element} function was succesfully added ${res.locals.layerName}`, ARN: req.cookies['ARN']}) as IHistory;
              passedFuncs.push(element);
            }
          }
        }
        //pass down array of passing functions
        res.locals.passFuncs = passedFuncs;
      } catch (error) {
        return next({
          log:
            (`there was a problem in testController.testDependencies. Error: 
            ${error}`),
          status: 400,
          message: { err: 'Your test failed' },
        });
      }
    };

    try {
      // setTimeout is necessary to avoid moving to the next middleware function before all of the tests have been completed
      // the exact timeout time is currently 5000ms, but lower values could be tested
      setTimeout(async () => {
        await Promise.all(
          funcNames.map((func: string, index: number) => dependenciesFunction(func, index))
        );
        next();
      }, 5000);
    } catch (error) {
      return res.status(403).send(error.message);
    }
  },

  // Middleware to disconnect all the functions that failed our runtime and dependecies tests
  removeFailedFunc: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // req.body includes the layer ARN and res.locals includes array of failed funcs
    const ARN: string = req.body.ARN;
    const failedFunctions: string[] = res.locals.failedFunctions;
    //helper function to remove layer from function on failing
    const disconnect = async (functionName: string): Promise<void> => {
      try {
        // removes incompatible layer from function
        const input = { FunctionName: functionName };
        const getFunctionCommand = new GetFunctionCommand(input);
        const { Configuration } = await lambdaClient.send(getFunctionCommand);
        // filter out incompatible layer
        // newArray contains all layers that are compatible
        const newArray = Configuration.Layers.filter((layer) => {
          return layer.Arn !== ARN;
        });

        // update layers property of function with compatible layers only
        const updateInput = {
          FunctionName: functionName,
          Layers: newArray.map((element) => element.Arn),
        };
        const updateFunctionConfigurationCommand =
          new UpdateFunctionConfigurationCommand(updateInput);
        const updateResponse = await lambdaClient.send(
          updateFunctionConfigurationCommand
        );
      } catch (err) {
        return next(err);
      }
    };

    try {
      // resolve all promises before moving to next
      await Promise.all(failedFunctions.map((func) => disconnect(func)));
      return next();
    } catch (err) {
      return next(err);
    }
  },

  // // Nhat's attempt to test compatibility on functions tab of app
  // testRuntimeFunctions: async (req: Request, res: Response, next: NextFunction) => {
  //   // initialize an array of layers that have compatible runtimes, will be passed to next middleware
  //   const passLayers: string[] = [];
  //   // initialize an array of layers that don't have compatible runtimes, will be saved on res.locals
  //   // to display on the front end
  //   const failLayers: string[] = [];
  //   // deconstruct req.body. ARN in this case is a specific function ARN
  //   const { layerArray, } = req.body;
  //   const ARN: string = req.body.ARN;
  //   const FunctionName: string = req.body.ARN
  //   // get info about a specfic function
  //   const getFunctionCommand = new GetFunctionCommand({
  //     FunctionName: FunctionName
  //   })
  //   const getFunctionResponse = await lambdaClient.send(getFunctionCommand);
  //   // gets the function's compatible runtimes
  //   const functionRuntime = getFunctionResponse.Configuration.Runtime;
  //   // a property on res.locals that will store all of the errors we catch along our middlewares
  //   res.locals.addError = [];

  //   //helper function, iterate through layerArray checking runtime compatibilty
  //   const runTimeLayer = async (element: string) => {
  //     try {
  //       // gets info about layer
  //       const getLayerVersionCommand = new GetLayerVersionByArnCommand({ Arn})
  //     } catch (error) {
  //       return next({
  //         log: `there was a problem in testController.testRuntimeFunctions. Error: ${error}`,
  //         status: 400,
  //         message: { err: 'Problem testing function runtime'}
  //       });
  //     }
  //   }
  // }
}
export default testController;
