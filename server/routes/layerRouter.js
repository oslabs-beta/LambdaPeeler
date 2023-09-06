const express = require('express');

const layerController = require('../controllers/layerController');

const router = express.Router();

router.get('/list', layerController.getLayer, layerController.getVersions, (req, res) => {
  res.status(200).json(res.locals.layersWithVersions);
})

router.post('/list', layerController.updateLayer, (req, res) => {
  res.sendStatus(200);
})

router.post('/functions', layerController.getFunctions, (req, res) => {
  res.status(200).json(res.locals.functionArray);
})



module.exports = router;
