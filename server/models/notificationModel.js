const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create mongoose Schema of user 
//used to hold username and passwords for login
//ARN will be used to connect to their AWS account
const ErrorMessage = new Schema({
  message: {type: String, required: true},
  postDate: {type: Date, default: Date.now}
  //user: {type: String, required: true}
});


//Export user schedma
module.exports = mongoose.model('ErrorMessage', ErrorMessage);