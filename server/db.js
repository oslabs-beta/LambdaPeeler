const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dotenv = require('dotenv');
dotenv.config();

//connect to mongoDB - going to hide this
//const myURI = 'mongodb+srv://shandie231:peelerLambda@cluster0.nritsmb.mongodb.net/?retryWrites=true&w=majority';

//set uri to passed in value
const URI = process.env.MONGODB_URI;

const connectDB = () => {

  //attempt to connect to mongoDB using myURI string
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

//when connected display message to dev successful connection
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
  });

//if connection fails message dev failure message
  mongoose.connection.on('error', (error) => {
    console.log('Error connecting to MongoDB Atlas. Error: ', error);
  });
};

//run function to conncet to db

module.exports = connectDB;

