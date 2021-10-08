import axios from 'axios'
import React, { Component }  from 'react'
import GoalItem from './goal-item'
import './planner.css'
import ActsListInPlanner from './plannerActsList'

class Planner extends Component {
  state = {
    goalsList: [],
    activityList: [],
    selectedGoals: [],
    selectedActs: []
  }

  componentDidMount() {
    axios.get('/api/goals/')
      .then(res => {
        this.setState({goalsList: res.data})
        // console.log('Goals: ',this.state.goalsList)
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

  findIndex = obj => this.state.selectedGoals.indexOf(obj)

  rmDuplicates = arr => {
    const ids = arr.map(item => item._id)
    const filtered = arr.filter(({_id}, index) => !ids.includes(_id, index + 1))
    return filtered;
}

  handleChoose = (e, goal) => {
    const {selectedGoals, selectedActs} = this.state
    const myGoals = selectedGoals.slice(0)
    e ? (() => {
      myGoals.push(goal)
      this.setState(
        {
          selectedGoals: myGoals,
          selectedActs: this.rmDuplicates(selectedActs.concat(goal.acts))
        },
        () => console.log('selectedActs', this.state.selectedActs)
      )
    })()
    :
    (() => {
      myGoals.splice(this.findIndex(goal), 1)
      console.log('goals', myGoals)
      if(myGoals[0]){
        this.setState(
          {
            selectedGoals: myGoals,
            selectedActs: goal.acts
          },
          () => console.log('selectedActs', this.state.selectedActs)
        )
      } else {
        this.setState(
          {
            selectedGoals: [[]],
            selectedActs: [[]]
          },
          () => console.log('selectedActs', this.state.selectedActs, 'selectedGoal', myGoals)
        )
       
      }
    })()
  }

  render() {
    const { selectedGoals, goalsList, selectedActs } = this.state
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
              {/* {
                selectedGoals[0] ? */}
                  <ActsListInPlanner ArrForRender={selectedActs} />
                {/* :
                <p>No Act</p>
              } */}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Planner
/*
addFlag = goals => {
  let newData = []
  goals.map(goal => {
    return newData.push(
      {...goal, choosen: false}
    )
  })
  return newData
}
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