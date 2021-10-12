import React, { Component }  from 'react'
import axios from 'axios'
import './planner.css'
import GoalItem from './goal-item'
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
      .then(res => {this.setState({goalsList: res.data})})
      .catch(err => {console.log(err)})

    axios.get('/api/activities/')
      .then(res => {this.setState({activityList: res.data})})
      .catch(err => {console.log(err)})
  }

  findGoalIndex = Goal => this.state.selectedGoals.indexOf(Goal)
	findActIndex = Act => this.state.selectedActs.indexOf(Act)

  rmDuplicates = arr => {
    const ids = arr.map(item => item._id)
    const filtered = arr.filter(({_id}, index) => !ids.includes(_id, index + 1))
    return filtered;
}

	rmActs = actsArr => {
		let selectedActsArr = this.state.selectedActs
		actsArr.map(act => {
			return selectedActsArr.splice(this.findActIndex(act), 1)
		})
		return selectedActsArr
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
      myGoals.splice(this.findGoalIndex(goal), 1)
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
            selectedGoals: [],
            selectedActs: []
          },
          () => console.log('selectedActs', this.state.selectedActs, 'selectedGoal', myGoals)
        )
       
      }
    })()
  }
  // test method
  // 1. if goals exist in array   goal.innerarray.map((goalob)=> { selectedGoals.indexof(goalob)})  
  //    2a. if goals exist, remove them from array  selectedGoals.
  //    2b. if goals does not exist, add them into the array i.e. [...a1, ...a2]

  handler = goal => {
  	const { selectedGoals, selectedActs } = this.state
    selectedGoals.indexOf(goal) === -1 ?
      this.setState(
        {
          selectedGoals: [...selectedGoals, goal],
          selectedActs: this.rmDuplicates(selectedActs.concat(goal.acts))
        }
      )
  	:
		  this.setState(
				{
					selectedGoals: selectedGoals.splice(this.findGoalIndex(goal), 1),
					selectedActs: this.rmActs(goal.acts)
				},
				() => console.log('selectedActs', selectedActs, ' selectedGoal', selectedGoals)
			)
  }

  render() {
    const { goalsList, selectedActs } = this.state
    return(
      <div id="planner-wrap" title="planner">
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
              {
                selectedActs[0] ?
                  <ActsListInPlanner ArrForRender={selectedActs} />
                :
                  <>
                    <p className="No-act">
                      No Activities <br />
                      Select From Goals List To View Corresponding Activities
                    </p>
                  </>
              }
            </section>
          </div>

          <section className="col-12 my-2 mt-md-5 text-center">
            <button className="btn btn-success" type="submit">Submit</button>
            <a href="/" className="btn btn-secondary ms-3">Exit</a>
          </section>
        </div>
      </div>
    )
  }
}

export default Planner