// AWS SDK V3 syntax
const { LambdaClient, ListFunctionsCommand } = require("@aws-sdk/client-lambda");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const lambdaClient = new LambdaClient ({
  region: "us-east-1",
  credentials: defaultProvider() 
});

const functionController = {};

functionController.getFunction = async (req, res, next) => {
  try {
    const input = {};
    const command = new ListFunctionsCommand(input);
    const response = await lambdaClient.send(command);
    //console.log('getFunction response: ', response)
    res.locals.functions = response;
    return next();
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to fetch AWS functions' });
  }
}

// AWS SDK V2 syntax
// const AWS = require('aws-sdk');
// AWS.config.update({ region: 'us-east-1' });
// const lambda = new AWS.Lambda();

// const functionController = {};

// functionController.getFunction = (req, res, next) => {
//   lambda.listFunctions({}, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(400).json({ error: 'Failed to fetch AWS functions' });
//     } else {
//       res.locals.functions = data;
//       next();
//     }
//   });
// }


module.exports = functionController;