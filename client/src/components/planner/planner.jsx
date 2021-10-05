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

        <div className="row w-100">
          <div id="goals-list-wrap" className="col-12 col-sm-6">
            <section className="planner-card card-wrap">
              <h4>
                <i className="bi bi-trophy"></i> Goals
              </h4>
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
            <section className="planner-card card-wrap">
              <div className="row">
                <h4 className="col-7 col-md-6 col-lg-7">
                  <i className="bi bi-joystick"></i> Activities
                </h4>
                <div id="label" className="col-5 col-md-6 col-lg-5">
                    <b>Contribution level:</b> <br />
                    <i className="bi bi-star-fill me-4"></i>
                    High
                    <br />
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill me-2"></i>
                    Very High
                </div>
              </div>

              <div className="list card">
                <ul className="list-group list-group-flush">
                  {
                    activityList.map(activity => {
                      return(
                        <li key={activity._id} className="list-group-item">
                          {activity.name} 
                          {
                            activity.contribu === "on" ?
                            <span className="ms-3">
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                            </span>
                            :
                            <span className="ms-3">
                              <i className="bi bi-star-fill"></i>
                            </span>
                          }
                          
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