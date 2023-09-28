const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//connect to mongoDB - going to hide this
const myURI = ''; // insert MongoDB here

//set uri to passed in value
const URI = process.env.MONGO_URI || myURI;



const connectDB = () => {

  //attempt to connect to mongoDB using myURI string
  mongoose.connect(myURI, {
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

