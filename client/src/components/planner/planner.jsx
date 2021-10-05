import axios from 'axios'
import React, { Component }  from 'react'
import GoalItem from './goal-item'
import './planner.css'

class Planner extends Component {
  state = {
    goalsList: [],
    activityList: [],
    selectedGoals: []
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
      })
      .catch(err => {
        console.log(err)
      })
  }

  // addFlag = goals => {
  //   let newData = []
  //   goals.map(goal => {
  //     return newData.push(
  //       {...goal, choosen: false}
  //     )
  //   })
  //   return newData
  // }

  findIndex = (obj) => this.state.selectedGoals.indexOf(obj)

  handleChoose = (e, goal) => {
    const myGoals = this.state.selectedGoals.slice(0)
    e ? (() => {
      myGoals.push(goal)
      this.setState(
        {selectedGoals: myGoals},
        () => console.log('selectedGoals:', myGoals)
      )
    })()
    :
    (() => {
      // console.log(this.findIndex(goal))
      myGoals.splice(this.findIndex(goal), 1)
      this.setState(
        {selectedGoals: myGoals},
        () => console.log('Current goals:', myGoals)
      )
    })()
  }

  /*
  handleChoose = goal => {
    const i = this.state.goalsList.indexOf(goal)
    const currentGoalChoose = this.state.goalsList[i].choosen
    let newGoal = this.state.goalsList[i]
    goal.choosen ? 
      this.setState(
        {
          selectedGoals: [this.state.selectedGoals.splice(i, 1)]
        },
        () => console.log('state', this.state.selectedGoals)
      )
    : 
    (() => 
      {
        newGoal.choosen = !currentGoalChoose
        this.setState(
          {
            selectedGoals: [...this.state.selectedGoals, newGoal]
          },
          () => console.log('state', this.state.selectedGoals)
        )
      }
    )()
    this.forceUpdate()
  } */

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
                    goalsList.map(goal => 
                      <GoalItem goal={goal} onSelect={this.handleChoose} key={goal._id} />
                    )
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
 /*
<li id="choose-goals" key={goal._id} className="list-group-item">
  <div className="form-check">
    <input 
      onChange={(e) => this.handleChoose(e.target.value, goal)} className="form-check-input" type="checkbox" id={goal._id} />
    <label className="form-check-label" htmlFor={goal._id}>
      {goal.name}
    </label>
  </div>
</li>
*/

  // <li onClick={() => this.handleChoose(goal)} 
  //   key={goal._id} className="list-group-item">
  //   {
  //     selectedGoals.indexOf(goal)> -1 &&
  //     <span id="flag-wrap">
  //       <i className="bi bi-bookmark-check-fill"></i>
  //     </span>
  //   }
  //   <span>{goal.name}</span>
  // </li>