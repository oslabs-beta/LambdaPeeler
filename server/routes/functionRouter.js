const express = require('express');

const functionController = require('../controllers/functionController');
const layerController = require('../controllers/layerController');

const router = express.Router();

// returns list of all functions
router.get("/list", functionController.getFunction, (req, res) => {
  res.status(200).json(res.locals.functions)
})

// returns list of layers associated with specific layer
router.post('/layers', functionController.getLayers, (req, res) => {
  res.status(200).json(res.locals.layers);
})

// removes layer from functoin
router.post('/remove', functionController.removeLayer, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
