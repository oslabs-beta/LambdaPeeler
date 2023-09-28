
import express, { Request, Response, NextFunction } from 'express';
//const layerRouter = require('./routes/layerRouter');
import layerRouter from './routes/layerRouter';
//const functionRouter = require('./routes/functionRouter');
import functionRouter from './routes/functionRouter';
//const userRouter = require('./routes/userRouter');
import userRouter from './routes/userRouter';
//const connectDB = require('./db');
import connectDB from './db';
import path from 'path';

// const cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();


connectDB();
// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://lambdapeeler-675999984030.herokuapp.com");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// CORS
const cors = require('cors'); 
app.use(cors({ origin: 'https://lambdapeeler-675999984030.herokuapp.com', credentials: true }));

//app.use(express.static(path.join(__dirname, '../src/assets')));
app.use(express.static(path.join(__dirname, '../build')));
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));

app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use('/', express.static(path.join(__dirname, '../src')));


// grab arn from cookies to use for connection in middleware
// app.use((req: Request, res: Response, next: NextFunction) => {
//   const ARN: string = req.cookies.ARN;
//   app.locals.ARN = ARN;
//   next();
// });
app.get('/favicon.ico', (req: Request, res: Response) => {
  return res.status(401);
})
app.use('/layers', layerRouter);
app.use('/functions', functionRouter);
app.use('/user', userRouter);

//global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    //detailed message to dev
    log:
      `Express error handler caught unknown middleware error. Error: ${err}`,
    status: 400,
    //basic message to user
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  //send error message to frontend
  return res.status(errorObj.status).json(errorObj.message);
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
