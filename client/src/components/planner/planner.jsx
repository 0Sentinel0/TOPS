import axios from 'axios'
import React, { Component }  from 'react'
import './planner.css'

class Planner extends Component {
  state = {
    goalsList: [],
    activityList: []
  }

  componentDidMount() {
    axios.get('/api/goals/')
      .then(res => {
        this.setState({goalsList: res.data})
        console.log('Goals: ',this.state.goalsList)
      })
      .catch(err => {
        console.log(err)
      })

      axios.get('/api/activities/')
      .then(res => {
        this.setState({activityList: res.data})
        console.log('Acts: ', this.state.activityList)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { goalsList, activityList } = this.state
    return(
      <div id="planner-wrap">
        <h3>Onboarding Planner</h3>
        <hr />

        <div className="row">
          <div id="goals-list-wrap" className="col-12 col-sm-6">
            <section className="card-wrap">
              <h3>
                <i className="bi bi-trophy"></i> Goals
              </h3>
              <div className="list card">
                <ul className="list-group list-group-flush">
                  {
                    goalsList.map(goal => {
                      return(
                        <li key={goal._id} className="list-group-item">
                          {goal.name}
                        </li>
                    )})
                  }
                </ul>
              </div>
            </section>
          </div>
  
          <div id="acts-list-wrap" className="col-12 col-sm-6">
            <section className="card-wrap">
              <h3>
                <i className="bi bi-joystick"></i> Activities
              </h3>
              <div className="list card">
                <ul className="list-group list-group-flush">
                  {
                    activityList.map(activity => {
                      return(
                        <li key={activity._id} className="list-group-item">
                          {activity.name}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Planner