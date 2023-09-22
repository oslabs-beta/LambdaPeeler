import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IHistory extends Document {
  message: string;
  postDate: Date;
  ARN: string;
}


//create mongoose Schema of user 
//used to hold username and passwords for login
//ARN will be used to connect to their AWS account
const HistoryLogSchema: Schema<IHistory> = new Schema({
  message: {type: String, required: true},
  ARN: {type: String, required: true},
  postDate: {type: Date, default: Date.now}
  
  //user: {type: String, required: true}
});


//Export user schedma
const HistoryLog: Model<IHistory> = mongoose.model('HistoryLog', HistoryLogSchema);
export default HistoryLog;
