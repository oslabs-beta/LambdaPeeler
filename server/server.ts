
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

//
connectDB();
// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// CORS
const cors = require('cors'); 
app.use(cors({ origin: 'https://lambda-peeler.onrender.com/', methods: ["POST", "GET"], credentials: true }));
// app.use(cors());


// // app.use(express.static('assets'));
app.use(express.static(path.join(__dirname, '../dist')));
// app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', express.static(path.join(__dirname, '/index.html')));



app.use('/api/layers', layerRouter);
app.use('/api/functions', functionRouter);
app.use('/api/user', userRouter);

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

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
