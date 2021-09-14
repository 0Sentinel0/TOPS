import express from 'express'
import mongoose from 'mongoose'
import activities from './api/activities.js'
import path from 'path'

const app = express();

app.use(express.json());
app.use('/api/activities', activities)

// For Deploy
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(client/build))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// DB Config:
const db = 'mongodb+srv://dbuser:SHY816@tops-cluster.0t8db.mongodb.net/TOPS-Cluster?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(db)
  .then(()=> console.log('MongoDB Connected!'))
  .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


// const CONNECTION_URL = 'mongodb+srv://dbuser:SHY816@tops-cluster.0t8db.mongodb.net/TOPS-Cluster?retryWrites=true&w=majority'

// mongoose.connect(CONNECTION_URL)
//   .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
//   .catch(err => console.log(err))