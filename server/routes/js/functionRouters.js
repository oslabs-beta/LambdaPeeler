const express = require('express');

const functionController = require('../controllers/functionController.ts').default;
const layerController = require('../controllers/layerController.ts').default;

const router = express.Router();

// returns list of all functions
router.get("/list", 
functionController.assumeRole, 
functionController.getFunction, 
(req, res) => {
  res.status(200).json(res.locals.functions)
})

// returns list of layers associated with specific layer
router.post('/layers', functionController.getLayers, (req, res) => {
  res.status(200).json(res.locals.layers);
})

// removes layer from functoin
router.post('/remove', functionController.removeLayer, (req, res) => {
  res.sendStatus(200);
})

router.post('/add', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
