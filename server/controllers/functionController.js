// AWS SDK V3 syntax
const { LambdaClient, ListFunctionsCommand, GetFunctionConfigurationCommand, ListLayersCommand } = require("@aws-sdk/client-lambda");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');


// const {
//   LambdaClient,
//   ListLayersCommand,
//   ListLayerVersionsCommand,
//   ListFunctionsCommand,
//   GetFunctionCommand,
//   GetFunctionConfigurationCommand,
//   UpdateFunctionConfigurationCommand,
// } = require('@aws-sdk/client-lambda');
// const { defaultProvider } = require('@aws-sdk/credential-provider-node');
const lambdaClient = new LambdaClient({
  region: 'us-east-1',
  credentials: defaultProvider(),
});



// const assumeRole = async () => {
//   const stsClient = new STSClient({ 
//     region: "us-east-1",
//   });

//   const roleToAssume = {
//     // RoleArn: 'arn:aws:iam::082338669350:role/OSPTool',
//     RoleArn: 'arn:aws:iam::082338669350:role/OSPTool',
//     RoleSessionName: 'FunctionControllerSession',
//   };

//   const command = new AssumeRoleCommand(roleToAssume);
//   const { Credentials } = await stsClient.send(command);

//   return {
//     accessKeyId: Credentials.AccessKeyId,
//     secretAccessKey: Credentials.SecretAccessKey,
//     sessionToken: Credentials.SessionToken,
//   };
// };

// let lambdaClient;

// (async () => {
//   const tempCredentials = await assumeRole();

//   lambdaClient = new LambdaClient({
//     region: "us-east-1",
//     credentials: tempCredentials
//   });
// })();

const functionController = {};

functionController.getFunction = async (req, res, next) => {
  try {
    const input = {};
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


functionController.getLayers = async(req, res, next) => {
  //ARN of function
  const layerArray = [];
  res.locals.layers = [];
  const { ARN, layers } = req.body;
  console.log('ARN: ', ARN);
  try{
    
    const command = new GetFunctionConfigurationCommand({FunctionName: ARN});
    const Configuration  = await lambdaClient.send(command);
    //console.log('config: ', Configuration);
    if(Configuration.Layers){

      Configuration.Layers.map(el => {
        layerArray.push(el.Arn);
      })
      // console.log('layerArray:', layerArray);
    }

    //res.locals.layers = Configuration.Layers;
    
    // res.locals.layers has the layer ARN but not name, version
    // ListLayersCommand will give us detailedLayersArray
    // iterate through Configuration.Layers and 

    // const layerCommand = new ListLayersCommand({});
    // const layerResponse = await lambdaClient.send(layerCommand);
    //console.log('layerResponse; ', layerResponse);
    // if(layerResponse.Layers) {
    console.log('layers: ', layers);
      layers.map(layer => {
        // inside each layer object, get each of the arn strings in "ARN" property and compare to layerArray
        layer["ARN"].map((layerARN, index) => {
          console.log('layerArn: ', layerARN);
          if(layerArray.includes(layerARN)) {
            res.locals.layers.push({
              LayerName: layer.name,
              LayerVersion: layer.versions[index],
              LayerArn: layerARN
            })
          }
        });
      })
      //   //console.log('Layer Arn: ', layer.LatestMatchingVersion.LayerVersionArn);
      //   if(layerArray.includes(layer.LatestMatchingVersion.LayerVersionArn)) {
      //     res.locals.layers.push({
      //       LayerName: layer.LayerName,
      //       LayerArn: layer.LatestMatchingVersion.LayerVersionArn});
      //     }
      // }
    
    // console.log('end of getLayers');
    return next();
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ error: `Failed to fetch layers for function ${ARN}` });
  }
}


module.exports = functionController;