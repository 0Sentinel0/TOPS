import axios from 'axios'
import React, { Component } from 'react'
import GenericCardItem from './item.jsx'

class Activity extends Component {
  state = {
    newActivityName: "",
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

  formHandler = activityName => {
    this.setState({
      newActivityName: activityName
    })
  }

  createActivity = e => {
    e.preventDefault()
    const name = { name: this.state.newActivityName }
    axios.post('/api/activities/', name)
      .then(res => {
        this.setState({ activityList: [...this.state.activityList, name] })
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

  render() {
    const { activityList } = this.state
    return(
      <div className="info-pane">
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
              <label htmlFor="activityName">Activity Name</label>
              <input onChange={(e) => this.formHandler(e.target.value)} id="activityName" type="text" className="form-control mt-2" />
              <button type="submit" className="btn btn-success d-block mx-auto">Create Activity</button>
            </form>
          </section>
       </div>
      </div>
    )
  }
}

export default Activity