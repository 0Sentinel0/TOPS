import axios from 'axios'
import React, { Component } from 'react'
import GenericCardItem from './item.jsx'

class Activity extends Component {
  state = {
    newActivityName: "",
    contribu: "off",
    activityList: []
  }

  componentDidMount() {
    axios.get('/api/activities/')
      .then(res => {
        this.setState({activityList: res.data})
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  createActivity = e => {
    e.preventDefault()
    const data = {
      name: this.state.newActivityName,
      contribu: this.state.contribu
    }
    console.log(data)
    axios.post('/api/activities/', data)
      .then(res => {
        this.setState({ activityList: [...this.state.activityList, data] })
        alert('Success! New Activity Created')
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        alert('Sorry! Request failed. Refer to console')
      })
  }

  deleteItem = id => {
    axios.delete('/api/activities/' + id)
      .then(res => {
        console.log(res)
        const newData = this.state.activityList.filter(act => act._id !== id)
        this.setState({activityList: newData})
      })
  }

  nameHandler = activityName => {
    this.setState({
      newActivityName: activityName
    })
  }

  contribuHandler = veryHigh => {
    this.setState({
      contribu: veryHigh
    })
    console.log(this.state.contribu)
  }

  render() {
    const { activityList } = this.state
    return(
      <div id="Acts-Page" className="info-pane">
       <div className="row gx-5">
          <section className="card-wrap col-12 col-md-6 col-xl-5">
            <h3><i className="bi bi-joystick"></i> Activity List</h3>
            <div className="list card mt-3">
              <ul className="list-group list-group-flush">
                {
                  activityList.map(activity => 
                    <GenericCardItem key={activity._id} item={activity} onDelete={this.deleteItem} />
                  )
                }
              </ul>
            </div>
          </section>
  
          <section className="new-item-form col-12 col-md-6 col-xl-5">
            <h3><i className="bi bi-plus-square"></i> New Activity</h3>
            <hr />
            <form onSubmit={this.createActivity}>
              <div>
                <label htmlFor="activityName">Activity Name</label>
                <input onChange={(e) => this.nameHandler(e.target.value)} id="activityName" type="text" className="form-control" />
              </div>
              
              <div className="form-check form-switch my-3">
                <label className="form-check-label" htmlFor="activityContibu">Very High Contribution</label>
                <input onChange={(e) => this.contribuHandler(e.target.value)} className="form-check-input" type="checkbox" id="activityContibu" />
              </div>
              
              <button type="submit" className="btn btn-success d-block mx-auto">Create Activity</button>
            </form>
          </section>
       </div>
      </div>
    )
  }
}

export default Activity