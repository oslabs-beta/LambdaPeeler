const express = require('express');

const layerController = require('../controllers/layerController');
const testController = require('../controllers/testController');

const router = express.Router();

router.get(
  '/list',
  layerController.getLayer,
  layerController.getVersions,
  (req, res) => {
    res.status(200).json(res.locals.layersWithVersions);
  }
);

router.post('/remove', layerController.removeFunction, (req, res) => {
  res.sendStatus(200);
});

router.post(
  '/add',
  testController.testRuntime,
  testController.getTest,
  layerController.addFunction,
  testController.testDependencies,
  testController.removeFailedFunc,
  (req, res) => {
    if (res.locals.errorMessageToUser) {
      res.status(409).json(res.locals.addError);
    } else {
      res.sendStatus(200);
    }
  }
);

router.post('/functions', layerController.getFunctions, (req, res) => {
  res.status(200).json(res.locals.functionArray);
});

module.exports = router;
