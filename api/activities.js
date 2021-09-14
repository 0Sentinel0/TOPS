import Express from "express";
import Activity from "../models/Activitiy.js";

const router = Express.Router()

// GET api/activities
router.get('/', (req, res) => {
  Activity.find()
    .sort({ date: -1 })
    .then(activities => res.json(activities))
})

// POST api/activities
router.post('/', (req, res) => {
  const newActivity = new Activity({
    name: req.body.name
  })

  newActivity.save()
    .then(activity => res.json(activity))
})

// DELETE api/activities/:id
router.delete('/:id', (req, res) => {
  Activity.findById(req.params.id)
    .then(activity => activity.remove().then(
      () => res.json({success: true})
    ))
    .catch(err => res.status(404).json({success: false}))
})


export default router