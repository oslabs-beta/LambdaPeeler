// AWS SDK V3 syntax
const { LambdaClient, 
  ListFunctionsCommand, 
  GetFunctionConfigurationCommand, 
  ListLayersCommand, 
  UpdateFunctionConfigurationCommand, 
  GetFunctionCommand } = require("@aws-sdk/client-lambda");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { STSClient, 
  AssumeRoleCommand } = require('@aws-sdk/client-sts');

// OSP Account connection
// const lambdaClient = new LambdaClient({
//   region: 'us-east-1',
//   credentials: defaultProvider(),
// });
let lambdaClient;
const functionController = {};

// Begin: To connect to users' AWS accounts
functionController.assumeRole = async (req, res, next) => {
  try {
    console.log('arn: ', req.cookies.ARN)
    const stsClient = new STSClient({
      region: 'us-east-1',
    });
    const roleToAssume = {
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
    })
    next();
  }
  catch (err) {
    return next(
      res.status(500).json({ error: 'Failed to assume role' })
    );
  }
};


// (async () => {
//   const tempCredentials = await assumeRole();

//   lambdaClient = new LambdaClient({
//     region: "us-east-1",
//     credentials: tempCredentials
//   });
// })();

// End: To connect to users' AWS accounts


// Gets a list of all the user's functions
functionController.getFunction = async (req, res, next) => {
  try {
    const input = {};
    // Gets a list of functions on AWS account
    const command = new ListFunctionsCommand(input);
    const response = await lambdaClient.send(command);
    res.locals.functions = response;
    return next();
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to fetch AWS functions' });
  }
}

//gets a list of layers attached to specified functions
functionController.getLayers = async(req, res, next) => {
  // holds the Arn of the layers currently attached to the function
  const layerArray = [];
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
  const { ARN, layers } = req.body;
  try{
    // Gets info about functions
    const command = new GetFunctionConfigurationCommand({FunctionName: ARN});
    const Configuration  = await lambdaClient.send(command);
    //check if the function currently has layers
    if(Configuration.Layers){
      //if it does, map out that array, pushing each layerArn to layerArray
      Configuration.Layers.map(el => {
        layerArray.push(el.Arn);
      })
    }
    //iterate through the layers input, layers is array of objects see lines 71-90
      layers.map(layer => {
        //layer.Arn is array of arn values for every version of a given layer - iterate through list
        layer["ARN"].map((layerARN, index) => {
          // if this function has this specific layer version, add an object to res.locals.layers with the layer information we need on the frontend
          if(layerArray.includes(layerARN)) {
            res.locals.layers.push({
              LayerName: layer.name,
              LayerVersion: layer.versions[index],
              LayerArn: layerARN
            })
          }
        });
      })
    
    return next();
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ error: `Failed to fetch layers for function ${ARN}` });
  }
}

functionController.removeLayer = async (req, res, next) => {
  try {
  const { ARN, LayerName, layerVersion, functionName } = req.body;

  const input = { FunctionName: functionName };
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
      const updateFunctionConfigurationCommand = new UpdateFunctionConfigurationCommand(updateInput);
      await lambdaClient.send(updateFunctionConfigurationCommand);
      return next();
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove layer from function' });
  }
}
module.exports = functionController;