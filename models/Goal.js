import Mongoose from "mongoose";

const GoalSchema = Mongoose.Schema({
  name: String
})

const Goal = Mongoose.model('Goal', GoalSchema)

export default Goal