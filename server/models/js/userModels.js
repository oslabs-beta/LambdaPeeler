// // const mongoose = require('mongoose');
// // const Schema = mongoose.Schema;
// import { Schema, InferSchemaType } from 'mongoose';




// //create mongoose Schema of user 
// //used to hold username and passwords for login
// //ARN will be used to connect to their AWS account
// const User = new Schema({
//   username: {type: String, required: true, unique: true},
//   password: {type: String, required: true},
//   ARN: {type: String, required: true}
// });


// //Export user schedma
// module.exports = mongoose.model('User', User);