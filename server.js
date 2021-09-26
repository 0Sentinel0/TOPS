import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import activities from './api/activities.js'
import goals from './api/goals.js'

const app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(express.json());
app.use('/api/activities', activities)
app.use('/api/goals', goals)

// For Deploy
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// DB Config (Mine Backup):
// const db = 'mongodb+srv://dbuser:SHY816@tops-cluster.0t8db.mongodb.net/TOPS-Cluster?retryWrites=true&w=majority'
const db = 'mongodb+srv://hengyushi:yOXAfbN073HcrQq2@tops.7c1sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(db)
  .then(()=> console.log('MongoDB Connected!'))
  .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))



// Deployed Link: https://team-onb-pro-sup.herokuapp.com/
// const CONNECTION_URL = 'mongodb+srv://dbuser:SHY816@tops-cluster.0t8db.mongodb.net/TOPS-Cluster?retryWrites=true&w=majority'

// mongoose.connect(CONNECTION_URL)
//   .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
//   .catch(err => console.log(err))