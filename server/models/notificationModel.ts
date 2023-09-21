import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IError extends Document {
  message: string;
  postDate: Date;
}


//create mongoose Schema of user 
//used to hold username and passwords for login
//ARN will be used to connect to their AWS account
const ErrorMessageSchema: Schema<IError> = new Schema({
  message: {type: String, required: true},
  postDate: {type: Date, default: Date.now}
  //user: {type: String, required: true}
});


//Export user schedma
const ErrorMessage: Model<IError> = mongoose.model('ErrorMessage', ErrorMessageSchema);
export default ErrorMessage;
