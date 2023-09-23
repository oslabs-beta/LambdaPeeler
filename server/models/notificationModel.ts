import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IError extends Document {
  message: string;
  postDate: string;
  ARN: string;
}

const currentTimestamp = Date.now()
const currentDate = new Date(currentTimestamp)

const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1
const day = currentDate.getDate()
const hours = currentDate.getHours()
const minutes = currentDate.getMinutes()
const seconds = currentDate.getSeconds()

const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`

//create mongoose Schema of user 
//used to hold username and passwords for login
//ARN will be used to connect to their AWS account
const ErrorMessageSchema: Schema<IError> = new Schema({
  message: {type: String, required: true},
  ARN: {type: String, required: true},
  postDate: {type: String, default: formattedDate}
  
  //user: {type: String, required: true}
});


//Export user schedma
const ErrorMessage: Model<IError> = mongoose.model('ErrorMessage', ErrorMessageSchema);
export default ErrorMessage;
