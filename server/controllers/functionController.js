const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const lambda = new AWS.Lambda();

const functionController = {};

functionController.getFunction = (req, res, next) => {
  lambda.listFunctions({}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: 'Failed to fetch AWS functions' });
    } else {
      res.locals.functions = data
      next()
    }
  });
}


module.exports = functionController