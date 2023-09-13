const express = require('express');

const functionController = require('../controllers/functionController');
const layerController = require('../controllers/layerController');

const router = express.Router();

router.get("/list", functionController.getFunction, (req, res) => {
  res.status(200).json(res.locals.functions)
})

// router.post('/layers', functionController.getFunctions, (req, res) => {
//   res.status(200).json(res.locals.functionArray);
// });

router.post('/layers', functionController.getLayers, (req, res) => {
  res.status(200).json(res.locals.layers);
})

module.exports = router;
