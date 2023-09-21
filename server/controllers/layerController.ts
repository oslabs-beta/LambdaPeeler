import { LambdaClient,
ListLayersCommand,
ListLayerVersionsCommand,
ListFunctionsCommand,
GetFunctionCommand,
UpdateFunctionConfigurationCommand, 
LayersListItem, Layer} from '@aws-sdk/client-lambda';
import { Request, Response, NextFunction } from 'express';

import { STSClient, AssumeRoleCommand } from '@aws-sdk/client-sts';

import { defaultProvider } from '@aws-sdk/credential-provider-node';

import ErrorMessage from '../models/notificationModel';
import { IError } from '../models/notificationModel';

// OSP Account connection
// const lambdaClient = new LambdaClient({
  //   region: 'us-east-1',
  //   credentials: defaultProvider(),
  // });
let lambdaClient: LambdaClient;
const layerController = {
// Begin: To connect to users' AWS accounts
// Pull ARN from cookie after login

assumeRole: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const stsClient = new STSClient({
      region: 'us-east-1',
    });
    const roleToAssume: {RoleArn: string, RoleSessionName: string} = {
      //RoleArn has to end in /OSPTool
      //'arn:aws:iam::082338669350:role/OSPTool'
      RoleArn: req.cookies.ARN,
      //RoleArn: ARN,
      RoleSessionName: 'LayerControllerSession',
    };
  
    const command = new AssumeRoleCommand(roleToAssume);
    const { Credentials } = await stsClient.send(command);
  
    const tempCredentials = {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
    };
  
    lambdaClient = new LambdaClient({
      region: 'us-east-1',
      credentials: tempCredentials,
    });
    next();
  }
  catch (err) {
    return next({
      log:
        `Failed to assume role. Error: ${err}`,
      status: 500,
      //basic message to user
      message: {err: 'Failed to assume role'},
    })
  }
},

// End: To connect to users' AWS accounts


// Middleware function to get information about all layers from this account
getLayer: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // call the listLayers command to get all layers
    const input: {} = {};
    const listLayersCommand = new ListLayersCommand(input);
    const layersData = await lambdaClient.send(listLayersCommand);

    // extract the Layers array from the response and assign it to res.locals.layer
    res.locals.layer = layersData.Layers;
    // proceed to next middleware
    return next();
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch layers' });
  }
},

// Gets the versions of all the layers to display on our front end
getVersions: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // retrieve layer data stored in the res.locals from getLayer middleware
    const layers: LayersListItem[] = res.locals.layer;
    // loop over each layer and its versions
    const layerPromises = layers.map(async (layer) => {
      // call the listLayerVersions method on each layer and save it to a const
      const input = { LayerName: layer.LayerName };
      const listLayerVersionsCommand = new ListLayerVersionsCommand(input);
      const versionsData = await lambdaClient.send(listLayerVersionsCommand);
      /*VersionData Example: 
      {
        MetaData: {...},
        LayerVersions: [{
         CompatibleRuntimes: [Array],
         LicenseInfo: null,
         Description: 'We need 6 different total layers for edgecase',
         LayerVersionArn: 'arn:aws:lambda:us-east-1:082338669350:layer:MichaelLayer:1',
         Version: 1,
         CreatedDate: '2023-09-13T18:00:05.842+0000',
         CompatibleArchitectures: null
       }] 
      }    
*/
      // construct and return an object that contains the layer name, its versions, and the ARN of each version
      // versions will be an array
      return {
        name: layer.LayerName,
        versions: versionsData.LayerVersions.map((element) => element.Version),
        ARN: versionsData.LayerVersions.map((v) => v.LayerVersionArn),
      };
    });
    // Wait for all promises to resolve
    const layersWithVersions = await Promise.all(layerPromises);
    // store an array that contains layer info and their version onto res.locals
    res.locals.layersWithVersions = layersWithVersions;
    return next();
  } catch (err) {
    res.status(500).json({ err: 'Failed to fetch layer versions' });
  }
},

// Middleware to get all functions associated with a layer component
getFunctions: async (req: Request, res: Response, next: NextFunction)=> {
  try {
    // pull ARN from req body
    //Layer ARN
    const ARN: string = req.body.ARN;
    // array that will contain func names that have the layer we're looking for
    const functionArray: string[] = [];
    const input: {} = {};
    // lists all functions
    const listFunctionsCommand = new ListFunctionsCommand(input);
    const { Functions } = await lambdaClient.send(listFunctionsCommand);

    // iterate through the Functions array, checking each function to find if it has the layer that we're looking for
    // if so, push it to functionArray
    Functions.forEach((element) => {
      // if it currently has layers
      if (element.Layers) {
        // iterate thru each
        for (const item of element.Layers) {
          // if layer ARN matches, push func to func array
          //compare input layer ARN and ARN stored on Function.Layers
          if (item.Arn === ARN) {
            functionArray.push(element.FunctionName);
            break;
          }
        }
      }
    });
    // store functionArray in res.locals
    res.locals.functionArray = functionArray;
    return next();
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch associated functions' });
  }
},

// Middleware to remove function from a layer component
removeFunction: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // req.body includes the layer ARN and functionName
    // Layer ARN
    const ARN: string = req.body.ARN;
    const functionName: string = req.body.functionName
    // get the list of layers connected to functionName
    const input = { FunctionName: functionName };
    // gets info about a specific function
    const getFunctionCommand = new GetFunctionCommand(input);
    const { Configuration } = await lambdaClient.send(getFunctionCommand);

    // remove the layer from the Layers array by ARN and store it into const newArray
    const newArray = Configuration.Layers.filter((layer) => {
      return layer.Arn !== ARN;
    });
    // update the configuration of functionName using the new Layers array
    const updateInput = {
      FunctionName: functionName,
      Layers: newArray.map((element) => element.Arn),
    };
    const updateFunctionConfigurationCommand =
      new UpdateFunctionConfigurationCommand(updateInput);
    await lambdaClient.send(updateFunctionConfigurationCommand);

    return next();
  } catch (err) {
    // return next({
    //   log:
    //     `Failed to remove function from layer. Error: ${err}`,
    //   status: 500,
    //   //basic message to user
    //   message: {err: 'Failed to remove function from layer'},
    // })
    res.status(500).json({ error: 'Failed to remove function from layer' });
  }
},

// Middleware to add function to a layer component
addFunction: async (req: Request, res: Response, next: NextFunction) => {
  // req.body is an object with keys ARN (string layer ARN) and functionArray (array of string function names)
  // functionArray is not used here. instead we use passFuncs below
  const ARN: string = req.body.ARN;
  // passFuncs contains all funcs that pass initial runtime compatability test
  const passFuncs = res.locals.passedRuntime;

  const updateFunctions = async (functionName: string) => {
    try {
      const getFunctionInput = {
        FunctionName: functionName,
      }
      const getFunctionCommand = new GetFunctionCommand(getFunctionInput);
      const { Configuration } = await lambdaClient.send(getFunctionCommand);
      let newArray: Layer[] = [];
      // edge case: if the function has no layers yet, Configuration.Layers will be undefined
      if (Configuration.Layers === undefined) {
        newArray = [];
      } else {
        // else, set the array to be the current layers array
        newArray = Configuration.Layers;
      }
      // add this layer ARN to the current Layers array
      //if (!newArray.includes({ Arn: ARN})) {
        newArray.push({ Arn: ARN });
      //}

      // send the updated Layers array to AWS
      const updateFunctionConfigurationInput = {
        FunctionName: functionName,
        Layers: newArray.map((element) => element.Arn),
      }
      const updateFunctionConfigurationCommand = new UpdateFunctionConfigurationCommand(updateFunctionConfigurationInput);
      await lambdaClient.send(updateFunctionConfigurationCommand);
    } catch (error) {
      await ErrorMessage.create({message: `Failed to update function ${functionName}. Error: ${error.message}`, ARN: req.cookies['ARN']}) as IError;
      // add error message to error object to be sent to frontend
      res.locals.addError.push(
        `Failed to update function ${functionName}. Error: ${error.message}`
      );
    }
  };

  try {
    // resolves all promises before heading to next middleware
    await Promise.all(passFuncs.map((func: string) => updateFunctions(func)));
    return next();
  } catch (error) {
    console.log(error);
    return res.status(403).send(error.message);
  }
}
};

export default layerController;
