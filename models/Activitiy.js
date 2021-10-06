import Mongoose from "mongoose";

const ActivitySchema = Mongoose.Schema({
  name: String,
  contribu: Boolean // on for VERY HIGH, off for HIGH
})

const Activity = Mongoose.model('Activity', ActivitySchema)

export default Activity