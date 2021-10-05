import Mongoose from "mongoose";

const GoalSchema = Mongoose.Schema({
  name: String,
  acts: Array
})

const Goal = Mongoose.model('Goal', GoalSchema)

export default Goal