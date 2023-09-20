const express = require('express');

const layerRouter = require('./routes/layerRouter');
const functionRouter = require('./routes/functionRouter');
const userRouter = require('./routes/userRouter');
const connectDB = require('./db');
const cookieParser = require('cookie-parser');
connectDB();
// Initialize Express
const app = express();
const PORT = 3000;

// CORS
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// grab arn from cookies to use for connection in middleware
app.use((req, res, next) => {
  const ARN = req.cookies.ARN;
  app.locals.ARN = ARN;
  next();
});
app.use('/layers', layerRouter);
app.use('/functions', functionRouter);
app.use('/user', userRouter);

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    //detailed message to dev
    log:
      ('Express error handler caught unknown middleware error. Error: ', err),
    status: 400,
    //basic message to user
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  //send error message to frontend
  return res.status(errorObj.status).json(errorObj.message);
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
