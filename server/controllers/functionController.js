// AWS SDK V3 syntax
const { LambdaClient, ListFunctionsCommand, GetFunctionConfigurationCommand } = require("@aws-sdk/client-lambda");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');

const assumeRole = async () => {
  const stsClient = new STSClient({ 
    region: "us-east-1",
  });

  const roleToAssume = {
    // RoleArn: 'arn:aws:iam::082338669350:role/OSPTool',
    RoleArn: 'arn:aws:iam::825040963677:role/OSPTool',
    RoleSessionName: 'FunctionControllerSession',
  };

  const command = new AssumeRoleCommand(roleToAssume);
  const { Credentials } = await stsClient.send(command);

  return {
    accessKeyId: Credentials.AccessKeyId,
    secretAccessKey: Credentials.SecretAccessKey,
    sessionToken: Credentials.SessionToken,
  };
};

let lambdaClient;

(async () => {
  const tempCredentials = await assumeRole();

  lambdaClient = new LambdaClient({
    region: "us-east-1",
    credentials: tempCredentials
  });
})();

const functionController = {};

functionController.getFunction = async (req, res, next) => {
  try {
    const input = {};
    const command = new ListFunctionsCommand(input);
    const response = await lambdaClient.send(command);
    res.locals.functions = response;
    return next();
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to fetch AWS functions' });
  }
}

functionController.getFunctions = async (req, res, next) => {
  try {
    // pull ARN from req body
    const { ARN } = req.body;
    console.log('ARN:', ARN);
    const functionArray = [];
    // destructure the Functions array from the Layers object
    const input = {};
    const listFunctionsCommand = new ListFunctionsCommand(input);
    const { Functions } = await lambdaClient.send(listFunctionsCommand);
    // const { Functions } = await lambda.listFunctions({});
    // iterate through the Functions array, checking each function to find if it has the layer that we're looking for
    // if so, push it to functionArray
    Functions.forEach((element) => {
      if (element.Layers) {
        for (const item of element.Layers) {
          if (item.Arn === ARN) {
            functionArray.push(element.FunctionName);
            break;
          }
        }
      }
    });
    // store functionArray in res.locals
    res.locals.functionArray = functionArray;
    return next();
  } catch (err) {
    //console.error('Error fetching associated functions:', err);
    res.status(500).json({ error: 'Failed to fetch associated functions' });
  }
};


module.exports = functionController;