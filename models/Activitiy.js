import Mongoose from "mongoose";

const ActivitySchema = Mongoose.Schema({
  name: String,
  description: String
})

const Activity = Mongoose.model('Activity', ActivitySchema)

export default Activity