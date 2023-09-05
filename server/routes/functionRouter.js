const express = require('express');

const functionController = require('../controllers/functionController');

const router = express.Router();

router.get("/", functionController.getFunction, (req, res) => {
  res.status(200).json(res.locals.functions)
})


module.exports = router;
