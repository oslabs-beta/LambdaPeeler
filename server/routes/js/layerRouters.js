const express = require('express');

const layerController = require('../controllers/layerController.ts').default;
const testController = require('../controllers/testController.ts').default;

const router = express.Router();

// lists all layers and versions
router.get(
  '/list',
  layerController.assumeRole,
  layerController.getLayer,
  layerController.getVersions,
  (req, res) => {
    res.status(200).json(res.locals.layersWithVersions);
  }
);

// removes function from layer
router.post('/remove', layerController.removeFunction, (req, res) => {
  res.sendStatus(200);
});

// tests and adds compatible layer
router.post(
  '/add',
  testController.assumeRole,
  testController.testRuntime,
  testController.getTest,
  layerController.addFunction,
  testController.testDependencies,
  testController.removeFailedFunc,
  (req, res) => {
    if (res.locals.addError.length) {
      res.status(409).json(res.locals.addError);
    } else {
      res.sendStatus(200);
    }
  }
);

// lists all functions associated with specifc layer
router.post('/functions', layerController.getFunctions, (req, res) => {
  res.status(200).json(res.locals.functionArray);
});

module.exports = router;
