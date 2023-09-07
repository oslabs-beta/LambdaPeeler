const { Lambda } = require('@aws-sdk/client-lambda');
const lambda = new Lambda({ region: 'us-east-1' });

const layerController = {};

layerController.getLayer = async (req, res, next) => {
  try {
    // call the listLayers method
    const layersData = await lambda.listLayers({});
    // extract the Layers array from the response
    const layers = layersData.Layers;
    // assign the layers data to res.locals.layer
    res.locals.layer = layers;
    // proceed to next middleware
    next();
  } catch (err) {
    console.error('Error fetching layers:', err);
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
      const versionsData = await lambda.listLayerVersions({
        LayerName: layer.LayerName,
      });
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
    next();
  } catch (err) {
    console.error('Error fetching layer versions:', err);
    res.status(500).json({ error: 'Failed to fetch layer versions' });
  }
};

layerController.getFunctions = async (req, res, next) => {
  try {
    // pull ARN from req body
    const { ARN } = req.body;
    const functionArray = [];
    // destructure the Functions array from the Layers object
    const { Functions } = await lambda.listFunctions({});
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
    next();
  } catch (err) {
    console.error('Error fetching associated functions:', err);
    res.status(500).json({ error: 'Failed to fetch associated functions' });
  }
};

layerController.removeFunction = async (req, res, next) => {
  try {
    // req.body includes the layer ARN and functionName
    const { ARN, functionName } = req.body;
    // get the list of layers connected to functionName
    const { Configuration } = await lambda.getFunction({
      FunctionName: functionName,
    });
    //console.log('Config', Configuration);
    // console.log('Configuration.Layers: ', Configuration.Layers);
    // remove the layer from the Layers array by ARN
    const newArray = Configuration.Layers.filter((layer) => {
      return layer.Arn !== ARN;
    });
    // update the configuration of functionName using the new Layers array
    await lambda.updateFunctionConfiguration({
      FunctionName: functionName,
      Layers: newArray.map((element) => element.Arn),
    });
    next();
  } catch (err) {
    console.error('Error removing function from layer:', err);
    res.status(500).json({ error: 'Failed to remove function from layer' });
  }
};

layerController.addFunction = async (req, res, next) => {
  // req.body is an object with keys ARN (string layer ARN) and functionArray (array of string function names)
  //console.log('req.body: ', req.body);
  const { ARN, functionArray } = req.body;
  let newArray;

  // iterate through functionArray
  functionArray.map(async (functionName) => {
    try {
      let startTime = Date.now();
      // get the array of layers connected to this function
      const { Configuration } = await lambda.getFunction({
        FunctionName: functionName,
      });

      // add this layer ARN to the current Layers array
      if (Configuration.Layers === undefined) {
        newArray = [];
      } else {
        newArray = Configuration.Layers;
      }

      newArray.push({ Arn: ARN });

      let doneWithGetFunction = Date.now();
      let arnArray = newArray.map((element) => element.Arn)

      // send the updated Layers array to AWS
      await lambda.updateFunctionConfiguration({
        FunctionName: functionName,
        // Layers: newArray.map((element) => element.Arn),
        Layers: arnArray,
      });

      let doneWithUpdateFunction = Date.now();

      console.log(`getFunction call: ${doneWithGetFunction - startTime}. updateFunctionConfig call: ${doneWithUpdateFunction - doneWithGetFunction}`);
      return next();
    } catch (error) {
      console.log(error);
      return next(error);
    }
  });

  // const APICalls = async () => {
  //   await lambda.updateFunctionConfiguration({
  //     FunctionName: functionName,
  //     Layers: newArray.map((element) => element.Arn),
  //   });
  // };

  // try {
  //   await Promise.all()
  //   next();
  // } catch (error) {
  //   console.log(error);
  //   return next(error);
  // }
};

module.exports = layerController;
