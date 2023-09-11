const express = require('express');

const testController = require('../controllers/testController');

const router = express.Router();

router.get("/", testController.getTest, testController.testDependencies, (req, res) => {
  res.status(200).json(res.locals.schemaData);
})

// eventual router for test functions
/*
router.post("/", testController.getTest, testController.testFunc, (req, res) => {
  res.status(200).json(res.locals.testResults);
})
*/


module.exports = router;
