// AWS SDK V3 syntax
import { LambdaClient, 
  ListFunctionsCommand, ListFunctionsCommandOutput,  
  GetFunctionConfigurationCommand, GetFunctionConfigurationCommandOutput, 
  ListLayersCommand,
  UpdateFunctionConfigurationCommand, UpdateFunctionConfigurationCommandInput, 
  GetFunctionCommand, Layer} from '@aws-sdk/client-lambda';
// const { defaultProvider } = require('@aws-sdk/credential-provider-node');
import { defaultProvider } from '@aws-sdk/credential-provider-node';
// const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');
import { STSClient, AssumeRoleCommand, AssumeRoleCommandOutput } from '@aws-sdk/client-sts';
import { Request, Response, NextFunction } from 'express';
// OSP Account connection
// const lambdaClient = new LambdaClient({
//   region: 'us-east-1',
//   credentials: defaultProvider(),
// });

let lambdaClient: LambdaClient;
const functionController: any = {
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
                RoleSessionName: 'FunctionControllerSession',
            };
            
            const command: AssumeRoleCommand = new AssumeRoleCommand(roleToAssume);
            const { Credentials }  = await stsClient.send(command) as AssumeRoleCommandOutput
            
            const tempCredentials: {accessKeyId: string, secretAccessKey: string, sessionToken: string} = {
                accessKeyId: Credentials.AccessKeyId,
                secretAccessKey: Credentials.SecretAccessKey,
                sessionToken: Credentials.SessionToken,
            };
            
            lambdaClient = new LambdaClient({
                region: 'us-east-1',
                credentials: tempCredentials,
            });
            return next();
        } catch (err) {
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
    
    // Gets a list of all the user's functions
    getFunction: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const input = {};
        // Gets a list of functions on AWS account
        const command: ListFunctionsCommand = new ListFunctionsCommand(input);
        const response: ListFunctionsCommandOutput= await lambdaClient.send(command);
        res.locals.functions = response;
        return next();
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Failed to fetch AWS functions' });
    }
},

    //gets a list of layers attached to specified functions
    getLayers: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      // holds the Arn of the layers currently attached to the function
      const layerArray: string[] = [];
      // res.locals.layers will hold layer information about the layers attached to this function. it will be returned to the frontend.
      res.locals.layers = [];
      // ARN: ARN of specified function passed in by front end
      // layers: layers state array of layer objects, which comes down from Display.jsx. Return value from GET to /layers/list.
      /*layers Example: 
      [
        {
            "name": "LodashLayer",
            "versions": [
                5,
                4,
                2,
                1
            ],
            "ARN": [
                "arn:aws:lambda:us-east-1:524403604286:layer:LodashLayer:5",
                "arn:aws:lambda:us-east-1:524403604286:layer:LodashLayer:4",
                "arn:aws:lambda:us-east-1:524403604286:layer:LodashLayer:2",
                "arn:aws:lambda:us-east-1:524403604286:layer:LodashLayer:1"
            ]
        },
    ]
    */

      const ARN: string = req.body.ARN
      const layers: {name: string, versions: number[], ARN: string[]}[] = req.body.layers;
      try {
        // Gets info about functions
        const command: GetFunctionConfigurationCommand = new GetFunctionConfigurationCommand({ FunctionName: ARN });
        const Configuration: GetFunctionConfigurationCommandOutput = await lambdaClient.send(command);
        //check if the function currently has layers
        if (Configuration.Layers) {
          //if it does, map out that array, pushing each layerArn to layerArray
          Configuration.Layers.map((el) => {
            layerArray.push(el.Arn);
          });
        }
        //iterate through the layers input, layers is array of objects see lines 71-90
        layers.map((layer: {name: string, versions: number[], ARN: string[]}) => {
          //layer.Arn is array of arn values for every version of a given layer - iterate through list
          layer['ARN'].map((layerARN, index) => {
            // if this function has this specific layer version, add an object to res.locals.layers with the layer information we need on the frontend
            if (layerArray.includes(layerARN)) {
              res.locals.layers.push({
                LayerName: layer.name,
                LayerVersion: layer.versions[index],
                LayerArn: layerARN,
              });
            }
          });
        });
    
        return next();
      } catch (error) {
        console.log(error);
        res
          .status(400)
          .json({ error: `Failed to fetch layers for function ${ARN}` });
      }
    },
    
    // removes a layer from a specific function
    removeLayer: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        // layer ARN
        const ARN: string = req.body.ARN;
        const functionName: string = req.body.functionName
        const input: {FunctionName: string} = { FunctionName: functionName };
        const getFunctionConfigurationCommand: GetFunctionConfigurationCommand = new GetFunctionConfigurationCommand(input);
        const Configuration: GetFunctionConfigurationCommandOutput = await lambdaClient.send(getFunctionConfigurationCommand);
        // remove the layer from the Layers array by ARN and store it into const newArray
        const newArray: Layer[] = Configuration.Layers.filter((layer) => {
          return layer.Arn !== ARN;
        });
        // update the configuration of functionName using the new Layers array
        const updateInput: UpdateFunctionConfigurationCommandInput = {
          FunctionName: functionName,
          Layers: newArray.map((element) => element.Arn),
        };
        const updateFunctionConfigurationCommand: UpdateFunctionConfigurationCommand =
          new UpdateFunctionConfigurationCommand(updateInput);
        const response = await lambdaClient.send(updateFunctionConfigurationCommand);

        res.locals.successful = true;
        return next();
      } catch (err) {
        res.status(500).json({ error: 'Failed to remove layer from function' });
      }
    },

    // removes all layers from a specific function
    removeAllLayers: async (req: Request, res: Response, next: NextFunction): Promise<void> => {

      const functionName: string = req.body.functionName;
      try {
        const updateInput: UpdateFunctionConfigurationCommandInput = {
          FunctionName: functionName,
          Layers: [],
        };
        const updateFunctionConfigurationCommand: UpdateFunctionConfigurationCommand =
          new UpdateFunctionConfigurationCommand(updateInput);
        const response = await lambdaClient.send(updateFunctionConfigurationCommand);
        return next();
      }
      catch(err) {
        res.status(500).json({ error: `Failed to remove all layers from function ${functionName}` });
      }
    }

    
};

export default functionController;
