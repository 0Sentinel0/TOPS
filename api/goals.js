import Express from "express"
import Goal from "../models/Goal.js"

const router = Express.Router()

// GET api/goals/
router.get('/', (req, res) => {
  Goal.find()
    .sort({ date: -1 })
    .then(goals => res.json(goals))
})

// POST api/goals/
router.post('/', (req, res) => {
  const newGoal = new Goal({
    name: req.body.name,
    acts: req.body.acts
  })

  newGoal.save()
    .then(goal => res.json(goal))
})

// PUT api/goals/
router.put('/:id', (req, res) => {
  Goal.findByIdAndUpdate(req.params.id, req.body)
    .then(newGoal => res.json(newGoal))
    .catch(err => res.status(400).json({success: false}))
})

// DELETE api/goals/:id
router.delete('/:id', (req, res) => {
  Goal.findById(req.params.id)
    .then(goal => goal.remove().then(
      () => res.json({success: true})
    ))
    .catch(err => res.status(404).json({success: false}))
})

export default router