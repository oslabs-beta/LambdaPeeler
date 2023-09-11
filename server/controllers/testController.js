const { SchemasClient, DescribeSchemaCommand } = require('@aws-sdk/client-schemas');
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');
const asciiDecoder = new TextDecoder('ascii');
//used for testFunc
const lambdaClient = new LambdaClient ({
  region: "us-east-1",
  credentials: defaultProvider() 
})

const client = new SchemasClient({ 
  region: "us-east-1",
  credentials: defaultProvider() 
})


//used for get Test

const testController = {};

testController.getTest = async (req, res, next) => {
  console.log('in controller Test');
  


const input = {
  RegistryName: "lambda-testevent-schemas",
  SchemaName: "_createAccount-schema"
};
  try{
    const command = new DescribeSchemaCommand(input);
    const response = await client.send(command);
    const data = JSON.parse(response.Content);
    // console.log('data: ', data.components.examples);
    res.locals.schemaData = data.components.examples;
    return next();
  } catch(err) {
    console.log('Error in testController.getTest:', err);
    return next({
      log: ('there was a problem in testController.getTest. Error: ', err),
      status: 400,
      mesage: 'No tests to find'
    })
  }
}

testController.testFunc = async (req, res, next) => {
  console.log('in testFunc');
  const lambdaInput = {
    FunctionName: "createAccount",
    Payload: JSON.stringify({
      "AcctNo": "12345"
    })
  }
  try {
    const command = new InvokeCommand(lambdaInput)
    const response = await lambdaClient.send(command);
    console.log('response: ', response)
    // const data = JSON.parse(response.Payload);
    const data = JSON.parse(response.Payload.transformToString());
    console.log('data2: ', data)
    return next();
  } catch(err) {
    console.log('Error in testController.testFunc:', err);
    return next({
      log: ('there was a problem in testController.testFunc. Error: ', err),
      status: 400,
      mesage: 'Your test failed'
    })
  }
}

module.exports = testController;