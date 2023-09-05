const express = require('express');

const layerController = require('../controllers/layerController');

const router = express.Router();

router.get("/", layerController.getLayer, layerController.getVersions, (req, res) => {
  res.status(200).json(res.locals.layersWithVersions)
})


module.exports = router;
