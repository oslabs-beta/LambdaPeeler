const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currentTimestamp = Date.now()
const currentDate = new Date(currentTimestamp)

const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1
const day = currentDate.getDate()
const hours = currentDate.getHours()
const minutes = currentDate.getMinutes()
const seconds = currentDate.getSeconds()

const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`

//create mongoose Schema of user 
//used to hold username and passwords for login
//ARN will be used to connect to their AWS account
const ErrorMessage = new Schema({
  message: {type: String, required: true},
  postDate: {type: String, default: formattedDate}
  //user: {type: String, required: true}
});


//Export user schedma
module.exports = mongoose.model('ErrorMessage', ErrorMessage);