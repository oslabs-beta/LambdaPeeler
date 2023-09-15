const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//connect to mongoDB - going to hide this
const myURI = 'mongodb+srv://shandie231:codesmith@cluster0.dzo4aem.mongodb.net/?retryWrites=true&w=majority';

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
connectDB();


//create mongoose Schema of user 
//used to hold username and passwords for login
//ARN will be used to connect to their AWS account
const User = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  ARN: {type: String, required: true}
});


//Export user schedma
module.exports = mongoose.model('User', User);