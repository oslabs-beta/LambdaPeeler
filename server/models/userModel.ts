import mongoose, { Schema, Document, Model } from 'mongoose'
// const mongoose = require('mongoose');



export interface IUser extends Document {
  username: string;
  password: string;
  ARN: string;
  region: string;
}

const UserSchema: Schema<IUser> = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  ARN: {type: String, required: true},
  region: {type: String, required: true}
})

const User: Model<IUser> = mongoose.model('User', UserSchema);
export default User;
// module.exports = { User }
//create mongoose Schema of user 
//used to hold username and passwords for login
//ARN will be used to connect to their AWS account
// const User = new Schema<IUser>({
//   username: {type: String, required: true, unique: true},
//   password: {type: String, required: true},
//   ARN: {type: String, required: true}
// });


//Export user schedma
// module.exports = mongoose.model<IUser>('User', User);