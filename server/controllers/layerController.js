const AWS = require('aws-sdk'),
      {
        Lambda
      } = require("@aws-sdk/client-lambda");
AWS.config.update({ region: 'us-east-1' });
const lambda = new Lambda({ region: 'us-east-1' });


const layerController = {};

layerController.getLayer = async (req, res, next) => {
  lambda.listLayers({}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: 'Failed to fetch AWS layers' });
    } else {
      res.locals.layer = data
      //console.log('layer data: ', data);
      next();
    }
  });
}

layerController.getVersions = async (req, res, next) => {
    // line below is currently just getting the versions for the first layer in the array
    // currently, there is only one layer (ValidationLayer) but later there will be others
  const test = res.locals.layer.Layers[0].LayerName;
  const version = await lambda.listLayerVersions({LayerName: test})
  console.log('version:', version);
  res.locals.versions = version.LayerVersions;
  next()
}

module.exports = layerController

/*
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const lambda = new AWS.Lambda();


const layerController = {};

layerController.getLayer = async (req, res, next) => {
  lambda.listLayers({}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: 'Failed to fetch AWS layers' });
    } else {
      res.locals.layer = data
      next();
    }
  });
}

layerController.getVersion = (req, res, next) => {
  const test = res.locals.layer.Layers[0].LayerName;
  const version = lambda.listLayerVersions({LayerName: test})
  console.log('version:', version);
  next()
}

module.exports = layerController
*/