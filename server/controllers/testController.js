const {
  SchemasClient,
  DescribeSchemaCommand,
} = require('@aws-sdk/client-schemas');
const { defaultProvider } = require('@aws-sdk/credential-provider-node');
const {
  LambdaClient,
  InvokeCommand,
  GetLayerVersionByArnCommand,
  GetFunctionCommand,
  UpdateFunctionConfigurationCommand,
} = require('@aws-sdk/client-lambda');
//used for testFunc
const lambdaClient = new LambdaClient({
  region: 'us-east-1',
  credentials: defaultProvider(),
});

const schemasClient = new SchemasClient({
  region: 'us-east-1',
  credentials: defaultProvider(),
});

//used for get Test

const testController = {};

testController.getTest = async (req, res, next) => {
  console.log('top of getTest');
  const funcNames = res.locals.passedRuntime;
  res.locals.failedFunctions = [];
  // console.log('res.locals: ', res.locals);
  //console.log('funcNames from res.locals: ', funcNames)

  try {
    const schemaData = funcNames.map(async (funcName) => {
      const input = {
        RegistryName: 'lambda-testevent-schemas',
        SchemaName: `_${funcName}-schema`,
      };
      const command = new DescribeSchemaCommand(input);
      const response = await schemasClient.send(command);
      //console.log('command:', command)
      const data = JSON.parse(response.Content);
      //console.log('data: ', data.components.examples);
      const dataComp = data.components.examples;
      return dataComp;
      // res.locals.schemaData = {
      //   ...schemaData,
      //   dataComp
      // };
    });
    const schemaDataPromise = await Promise.all(schemaData);
    // console.log('schemaDataPromise: ', schemaDataPromise);
    //console.log('PASSED getTest')
    res.locals.schemaData = schemaDataPromise;
    //console.log('schemaData: ', schemaDataPromise)
    return next();
  } catch (error) {
    console.log('Error in testController.getTest:', error);
    return next({
      log: ('there was a problem in testController.getTest. Error: ', error),
      status: 400,
      message: { err: 'No tests to find' },
    });
  }
};

testController.testRuntime = async (req, res, next) => {
  console.log('in test Run Time');
  const passFuncs = [];
  const failFuncs = [];
  const { ARN, functionArray } = req.body;
  const getLayerVersionCommand = new GetLayerVersionByArnCommand({ Arn: ARN });
  const getLayerResponse = await lambdaClient.send(getLayerVersionCommand);
  const layerRuntime = getLayerResponse.CompatibleRuntimes;
  res.locals.addError = [];

  const runTimeFunction = async (element) => {
    try {
      const getFunctionCommand = new GetFunctionCommand({
        FunctionName: element,
      });
      const getFunctionResponse = await lambdaClient.send(getFunctionCommand);
      const functionRuntime = getFunctionResponse.Configuration.Runtime;
      // console.log(`functionRuntime for ${element}: ${functionRuntime}`);

      if (layerRuntime.includes(functionRuntime)) {
        //console.log('passed runtime tests');
        // console.log('element:', element);
        passFuncs.push(element);
      } else {
        res.locals.addError.push(
          `${element} does not have the correct runtime`
        );
        // console.log('failed');
        failFuncs.push(element);
      }
      //console.log('PASSED testRunTime')
      // return next();
    } catch (error) {
      //console.log('Error in testController.testRuntime:', error);
      return next({
        log:
          ('there was a problem in testController.testRuntime. Error: ', error),
        status: 400,
        message: { err: 'Problem testing runtime' },
      });
    }
  };
  // console.log('passedFunc:', passFuncs)
  // console.log('failedFuncs:', failFuncs)
  res.locals.passedRuntime = passFuncs;
  res.locals.failRuntime = failFuncs;
  try {
    await Promise.all(functionArray.map(async (func) => runTimeFunction(func)));
    return next();
    // next();
  } catch (error) {
    return res.status(403).send(error.message);
  }
};

testController.testDependencies = async (req, res, next) => {
  console.log('top of testDependencies');
  const funcNames = res.locals.passedRuntime;
  const listOfTests = res.locals.schemaData;
  // const listOfErrors = [];
  res.locals.errorMessageToUser = [];
  /*
  res.locals.passedRuntime (funcNames) stores the array of function names, in order. eg [ 'createAccount', 'getAccountBalance' ]
  res.locals.schemaData (listOfTests) stores the array of function test payloads, in order. each function gets an object like {firstTestName: {value: test payload}, secondTestName: {value: test payload}}
  eg [{"1stShareableTest":{"value":{"AcctNo":"12346"}},"2ndShareableEvent":{"value":{"AcctNo":"12347"}}},{"3rdSharebableTest":{"value":{"AcctNo":"12345"}}}]
  console.log(listOfTests)
*/
  const passedFuncs = [];
  // res.locals.failedFunctions = [];

  const dependenciesFunction = async (element, index) => {
    try {
      const { ARN, functionArray } = req.body;
      // iterate over tests and extract the payload "value"
      for (const key in listOfTests[index]) {
        const payload = listOfTests[index][key].value;
        const lambdaInput = {
          FunctionName: element,
          Payload: JSON.stringify(payload),
        };
        //"AcctNo":"1234"
        // '{"AcctNo":"1234"}'
        // {AcctNo: "1234"}
        //console.log('lambda input: ', lambdaInput);
        //console.log()
        const command = new InvokeCommand(lambdaInput);
        const response = await lambdaClient.send(command);
        //console.log('response.FunctionError: ', response.FunctionError);

        if (response.FunctionError) {
          console.log(
            'Lambda Function Error:',
            response,
            'Payload:',
            response.Payload.transformToString()
          );
          res.locals.failedFunctions.push(lambdaInput.FunctionName);
          const failedFuncName = lambdaInput.FunctionName;
          const errorType = response.Payload.transformToString();
          const errorParse = JSON.parse(errorType);
          console.log('errorType: ', errorType);
          console.log('errorType is a ', typeof errorType);
          //console.log('response payload: ', response.Payload);
          const specError = response.FunctionError;
          const messageToUser = `Error linking ${failedFuncName} to layer ${ARN}. Please fix the following: ${errorParse.errorMessage}.`;

          // res.locals.failedFunctions = failedFunctions;

          // listOfErrors.push(messageToUser);
          res.locals.addError.push(messageToUser);
          //302 - Not modified
        } else {
          // push passing funcs to arr
          //console.log('passed dependencies test')
          if (!passedFuncs.includes(element)) {
            passedFuncs.push(element);
          }
        }
        //console.log(listOfErrors);
        //const data = JSON.parse(response.Payload.transformToString());
        //console.log(`Function name: ${element}. Event: ${key}. Data: ${JSON.stringify(data)}`);
      }
      //console.log('failed funcs: ', failedFunctions)
      console.log('passed funcs: ', passedFuncs);
      console.log('res.locals.passFuncs:', res.locals.passFuncs);
      res.locals.passFuncs = passedFuncs;
      //res.locals.failedFunctions = failedFunctions;
      // return next();
    } catch (error) {
      //console.log('Error in testController.testDependencies:', error);
      return next({
        log:
          ('there was a problem in testController.testDependencies. Error: ',
          error),
        status: 400,
        message: { err: 'Your test failed' },
      });
    }
  };

  try {
    setTimeout(async () => {
      await Promise.all(
        funcNames.map((func, index) => dependenciesFunction(func, index))
      );
      console.log('finished testing dependencies, moving to next');
      next();
    }, 5000);
    // next();
  } catch (error) {
    return res.status(403).send(error.message);
  }
};

testController.removeFailedFunc = async (req, res, next) => {
  console.log('top of removeFailed');
  // req.body and res.locals includes the layer ARN and array of failed funcs
  const { ARN } = req.body;
  const failedFunctions = res.locals.failedFunctions;
  const disconnect = async (functionName) => {
    try {
      const input = { FunctionName: functionName };
      const getFunctionCommand = new GetFunctionCommand(input);
      const { Configuration } = await lambdaClient.send(getFunctionCommand);
      //console.log('config: ', Configuration);
      const newArray = Configuration.Layers.filter((layer) => {
        return layer.Arn !== ARN;
      });

      const updateInput = {
        FunctionName: functionName,
        Layers: newArray.map((element) => element.Arn),
      };
      const updateFunctionConfigurationCommand =
        new UpdateFunctionConfigurationCommand(updateInput);
      const updateResponse = await lambdaClient.send(
        updateFunctionConfigurationCommand
      );
      //console.log('layers after remove: ' , updateResponse.Layers);
    } catch (err) {
      //console.log('in disconnect catch');
      console.log('In disconnenct catch. Error: ', err);
      return next(err);
    }
  };

  try {
    await Promise.all(failedFunctions.map((func) => disconnect(func)));
    console.log('finished removing, moving to next');
    return next();
  } catch (err) {
    console.log('Error in removing failed functions. Error: ', err);
  }
};

module.exports = testController;
