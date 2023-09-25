import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IHistory extends Document {
  message: string;
  postDate: string;
  ARN: string;
}


const formattedDate = () => {
  const currentTimestamp = Date.now()
  const currentDate = new Date(currentTimestamp)
  
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const seconds = currentDate.getSeconds()
  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
} 
//create mongoose Schema of user 
//used to hold username and passwords for login
//ARN will be used to connect to their AWS account
const HistoryLogSchema: Schema<IHistory> = new Schema({
  message: {type: String, required: true},
  ARN: {type: String, required: true},
  postDate: {type: String, default: formattedDate}
  
  //user: {type: String, required: true}
});


//Export user schedma
const HistoryLog: Model<IHistory> = mongoose.model('HistoryLog', HistoryLogSchema);
export default HistoryLog;
