const {
  LambdaClient,
  ListLayersCommand,
  ListLayerVersionsCommand,
  ListFunctionsCommand,
  GetFunctionCommand,
  UpdateFunctionConfigurationCommand,
} = require('@aws-sdk/client-lambda');
const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
// const assumeRole = async () => {
//   const stsClient = new STSClient({ 
//     region: "us-east-1",
//   });

//   const roleToAssume = {
//     // RoleArn: 'arn:aws:iam::082338669350:role/OSPTool',
//     RoleArn: 'arn:aws:iam::082338669350:role/OSPTool',
//     RoleSessionName: 'LayerControllerSession',
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

const lambdaClient = new LambdaClient({
  region: 'us-east-1',
  credentials: defaultProvider(),
});

const layerController = {};

layerController.getLayer = async (req, res, next) => {
  try {
    // call the listLayers method
    const input = {};
    const listLayersCommand = new ListLayersCommand(input);
    const layersData = await lambdaClient.send(listLayersCommand);

    // const layersData = await lambda.listLayers({});

    //console.log('layerData: ', layersData);
    // extract the Layers array from the response
    const layers = layersData.Layers;
    // assign the layers data to res.locals.layer
    res.locals.layer = layers;
    // proceed to next middleware
    return next();
  } catch (err) {
    //console.error('Error fetching layers:', err);
    res.status(500).json({ error: 'Failed to fetch layers' });
  }
};

layerController.getVersions = async (req, res, next) => {
  try {
    // retrieve layer data stored in the getLayer middleware
    const layers = res.locals.layer;
    // loop over each layer and its versions
    const layerPromises = layers.map(async (layer) => {
      // call the listLayerVersions method on each layer and save it to a const
      const input = { LayerName: layer.LayerName };
      const listLayerVersionsCommand = new ListLayerVersionsCommand(input);
      const versionsData = await lambdaClient.send(listLayerVersionsCommand);
      // const versionsData = await lambda.listLayerVersions({
      //   LayerName: layer.LayerName,
      // });
      // construct and return an object that contains the layer name and its versions
      // versions will be an array
      return {
        name: layer.LayerName,
        versions: versionsData.LayerVersions.map((element) => element.Version),
        ARN: versionsData.LayerVersions.map((v) => v.LayerVersionArn),
      };
    });
    // Wait for all promises to resolve
    const layersWithVersions = await Promise.all(layerPromises);
    //console.log('layersWithVersions:', layersWithVersions)
    // store an array that contains layer info and their version onto res.locals
    res.locals.layersWithVersions = layersWithVersions;
    return next();
  } catch (err) {
    //console.error('Error fetching layer versions:', err);
    return next(
      res.status(500).json({ error: 'Failed to fetch layer versions' })
    );
  }
};

layerController.getFunctions = async (req, res, next) => {
  try {
    // pull ARN from req body
    const { ARN } = req.body;
    const functionArray = [];
    // destructure the Functions array from the Layers object
    const input = {};
    const listFunctionsCommand = new ListFunctionsCommand(input);
    const { Functions } = await lambdaClient.send(listFunctionsCommand);
    // const { Functions } = await lambda.listFunctions({});
    // iterate through the Functions array, checking each function to find if it has the layer that we're looking for
    // if so, push it to functionArray
    Functions.forEach((element) => {
      if (element.Layers) {
        for (const item of element.Layers) {
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
    //console.error('Error fetching associated functions:', err);
    res.status(500).json({ error: 'Failed to fetch associated functions' });
  }
};

layerController.removeFunction = async (req, res, next) => {
  try {
    // req.body includes the layer ARN and functionName
    const { ARN, functionName } = req.body;
    // get the list of layers connected to functionName
    const input = { FunctionName: functionName };
    const getFunctionCommand = new GetFunctionCommand(input);
    const { Configuration } = await lambdaClient.send(getFunctionCommand);
    //console.log('Config', Configuration);
    // console.log('Configuration.Layers: ', Configuration.Layers);
    // remove the layer from the Layers array by ARN
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
    // await lambda.updateFunctionConfiguration({
    //   FunctionName: functionName,
    //   Layers: newArray.map((element) => element.Arn),
    // });
    return next();
  } catch (err) {
    //console.error('Error removing function from layer:', err);
    res.status(500).json({ error: 'Failed to remove function from layer' });
  }
};

layerController.addFunction = async (req, res, next) => {
  // console.log('top of add functions');
  // console.log('in add functions');
  // req.body is an object with keys ARN (string layer ARN) and functionArray (array of string function names)
  const { ARN } = req.body;
  const passFuncs = res.locals.passedRuntime;
  // iterate through functionArray
  const updateFunctions = async (functionName) => {
    try {
      const getFunctionCommand = new GetFunctionCommand({
        FunctionName: functionName,
      });
      const { Configuration } = await lambdaClient.send(getFunctionCommand);
      //console.log('configuration: ', Configuration);
      // get the array of layers connected to this function
      let newArray;
      // edge case: if the function has no layers yet, Configuration.Layers will be undefined
      if (Configuration.Layers === undefined) {
        newArray = [];
      } else {
        newArray = Configuration.Layers;
      }
      // add this layer ARN to the current Layers array
      if (!newArray.includes(ARN)) {
        newArray.push({ Arn: ARN });
      }
      //console.log(newArray)

      // send the updated Layers array to AWS
      const updateOutput = new UpdateFunctionConfigurationCommand({
        FunctionName: functionName,
        Layers: newArray.map((element) => element.Arn),
      });
      await lambdaClient.send(updateOutput);
    } catch (error) {
      // console.log('firsat error catch of addFunctions. error: ', error);
      res.locals.addError.push(
        `Failed to update function ${functionName}. Error: ${error.message}`
      );
    }
  };

  try {
    await Promise.all(passFuncs.map((func) => updateFunctions(func)));
    // console.log('end of adding funcs, moving to next');
    return next();
    // next();
  } catch (error) {
    //console.log('second error catch of addFunction. Error:' , error);
    return res.status(403).send(error.message);
  }
};

module.exports = layerController;
