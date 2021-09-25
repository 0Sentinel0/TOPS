import axios from 'axios'
import React from 'react'
import ActivityItem from './item.jsx'

class Sedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/activities/')
      .then(res => {
        this.setState({activities: res.data})
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { activities } = this.state
    return(
      <div className="w-75" style={{border: '1px solid gray', height: '300px', margin: '30px auto', overflowY: 'auto'}}>
        <div className="w-75 mx-auto">
        {
          activities.map(activity => 
            <ActivityItem key={activity._id} item={activity} />
          )
        }
        </div>
      </div>
    )
  }
}

export default Sedule