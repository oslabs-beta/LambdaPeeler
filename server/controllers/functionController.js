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
    RoleArn: 'arn:aws:iam::082338669350:role/OSPTool',
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


functionController.getLayers = async(req, res, next) => {
  //ARN of function
  const { ARN } = req.body;
  //console.log('ARN: ', ARN);
  try{
    
    const command = new GetFunctionConfigurationCommand({ARN: ARN});
    const Configuration  = await lambdaClient.send(command);
    console.log('config: ', Configuration);
    res.locals.layers = Configuration.Layers;
    console.log('end of getLayers');
    return next();
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ error: `Failed to fetch layers for function ${ARN}` });
  }
}


module.exports = functionController;