import mongoose, { Schema, Document, Model } from 'mongoose'
// const mongoose = require('mongoose');

import dotenv from 'dotenv';
dotenv.config();

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