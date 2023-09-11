const { Lambda } = require('@aws-sdk/client-lambda');
const lambda = new Lambda({ region: 'us-east-1' });

const layerController = {};

layerController.getLayer = async (req, res, next) => {
  try {
    // call the listLayers method
    const layersData = await lambda.listLayers({});

    // console.log('layerData: ', layersData);
    // extract the Layers array from the response
    const layers = layersData.Layers;
    // assign the layers data to res.locals.layer
    res.locals.layer = layers;
    // proceed to next middleware
    return next();
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
    return next();
  } catch (err) {
    console.error('Error fetching layer versions:', err);
    return next(res.status(500).json({ error: 'Failed to fetch layer versions' }));
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
    return next();
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
    return next();
  } catch (err) {
    console.error('Error removing function from layer:', err);
    res.status(500).json({ error: 'Failed to remove function from layer' });
  }
};

layerController.addFunction = async (req, res, next) => {
  console.log('top of addFunction');
  // console.log('in add functions');
  // req.body is an object with keys ARN (string layer ARN) and functionArray (array of string function names)
  const { ARN } = req.body;
  console.log('req.body: ', req.body)
  const passFuncs = res.locals.passedRuntime;
  console.log('Pass funcs: ', passFuncs)
  // iterate through functionArray
  const updateFunctions = (async (functionName) => {
    try {
      // get the array of layers connected to this function
      let newArray;
      const { Configuration } = await lambda.getFunction({
        FunctionName: functionName,
      });
      console.log('Configuration: ')
      // edge case: if the function has no layers yet, Configuration.Layers will be undefined
      if (Configuration.Layers === undefined) {
        newArray = [];
      } else {
        newArray = Configuration.Layers;
      }
      console.log('after if/else');
      // add this layer ARN to the current Layers array
      // if(!newArray.includes(ARN)){
      //   newArray.push({ Arn: ARN });
      // }
      console.log('ARN before push: ', ARN);
      newArray.push({ Arn: ARN });

      // send the updated Layers array to AWS
      console.log('before lambda.updateFunctionCOnfig')
      const updateOutput = await lambda.updateFunctionConfiguration({
        FunctionName: functionName,
        Layers: newArray.map((element) => element.Arn),
      });
      console.log('updateOutput.Layers: ', updateOutput.Layers);
      console.log('after lambda.updateFunctionCOnfig')
      const Configuration2 = await lambda.getFunctionConfiguration({
        FunctionName: functionName,});
      console.log('Configuration2.Layers: ', Configuration2.Layers);
    } catch (error) {
     // console.log('first error catch of addFunctions. error: ', error);
      throw new Error(`Failed to update function ${functionName}. Error: ${error.message}`);
    }
  });
  
  try {
    await Promise.all(passFuncs.map((func => updateFunctions(func))))
    console.log('end of addFunction');
    return next();
    // next();
  } catch (error) {
    console.log('second error catch of addFunction. Error:' , error);
    return res.status(403).send( error.message );
  }
};

module.exports = layerController;
