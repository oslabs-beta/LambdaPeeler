const { Lambda } = require("@aws-sdk/client-lambda");
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
    // console.log('layers:', layers)
    // console.log('break')
    // loop over each layer and its versions
    const layerPromises = layers.map(async (layer) => {
      // call the listLayerVersions method on each layer and save it to a const
      const versionsData = await lambda.listLayerVersions({ LayerName: layer.LayerName });
      // console.log('versionsData:', versionsData)
      // console.log('break')
      // construct and return an object that contains the layer name and its versions
      // versions will be an array
      return {
        name: layer.LayerName,
        versions: versionsData.LayerVersions.map(element => element.Version),
        ARN: versionsData.LayerVersions.map(v => v.LayerVersionArn)
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
    const { ARN } =  req.body;
    const functionArray = [];
    // destructure the Functions array from the Layers object
    const { Functions } = await lambda.listFunctions({});
    // iterate through the Functions array, checking each function to find if it has the layer that we're looking for
    // if so, push it to functionArray
    Functions.forEach(element => {
      if (element.Layers) {
        for (const item of element.Layers) {
          if (item.Arn === ARN) {
            functionArray.push(element.FunctionName);
            break;
          }
        }
      }
    })
    // store functionArray in res.locals
    res.locals.functionArray = functionArray
    next();
  } catch (err) {
    console.error('Error fetching associated functions:', err);
    res.status(500).json({ error: 'Failed to fetch associated functions' });
  }
}

module.exports = layerController;