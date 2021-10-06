import React, { Component } from 'react'
import axios from 'axios'
import GenericCardItem from '../activities/item'
import Dialog from '../dialog/dialog'

class Goals extends Component {
  state = {
    newGoalName: "",
    goalsList: [],
    ActsList: [],
    showDialog: false,
    dialogData: {}
  }
 
  componentDidMount() {
    axios.get('/api/goals/')
      .then(res => {
        const data = this.addLable(res.data)
        this.setState({goalsList: data})
        console.log('Goals', res.data)
      })
      .catch(err => {
        console.log(err)
      })

      axios.get('/api/activities/')
      .then(res => {
        this.setState({ActsList: res.data})
        // console.log('Acts:', res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  addLable = data => {
    let newData = []
    data.map(item => {
      return newData.push(
        {...item, type: 'goal'}
      )
    })
    return newData
  }

  formHandler = goalName => {
    this.setState({
      newGoalName: goalName
    })
  }

  createGoal = e => {
    e.preventDefault()
    let name = { name: this.state.newGoalName }
    console.log(name)
    axios.post('api/goals/', name)
      .then(res => {
        this.setState({ goalsList: [...this.state.goalsList, name] })
        alert(`Success! New Goal Created`)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        alert(`Sorry! Request failed. Refer to console`)
      })
  }

  deleteItem = id => {
    axios.delete('api/goals/' + id)
      .then(res => {
        console.log(res)
        const newData = this.state.goalsList.filter(goal => goal._id !== id)
        this.setState({goalsList: newData})
      })
      .catch(err => {
        console.log(err)
        alert(`Sorry! Request failed. Refer to console`)
      })
  }

  toggleDialog = item => {
    this.setState(
      {
        showDialog: !this.state.showDialog,
        dialogData: item
      }
    )
  }

  render() {
    const { goalsList, ActsList, dialogData } = this.state
    return (
      <div className="info-pane">
        <div className="row gx-5">
          <section className="card-wrap col-12 col-md-6 col-xl-5">
           <h3><i className="bi bi-trophy"></i> Goals List</h3>
            <div className="list card">
              <ul className="list-group list-group-flush">
                {
                  goalsList.map(goal => {
                    return(
                      <GenericCardItem key={goal._id} item={goal} onDelete={this.deleteItem} onClick={this.toggleDialog} />
                  )})
                }
              </ul>
            </div>
            <span style={{fontSize: '10px', color: 'gray'}}>
              <i>Click a goal to view its correspopnding activities.</i>
            </span>
          </section>

          { 
            this.state.showDialog 
              && 
            <Dialog data={dialogData} onClose={this.toggleDialog} actsList={ActsList} />
          }
          
          <section className="new-item-form col-12 col-md-6 col-xl-5">
            <h3><i className="bi bi-plus-square"></i> New Goal</h3>
            <form onSubmit={this.createGoal}>
              <label htmlFor="goalName">Goal Name</label>
              <input onChange={(e) => this.formHandler(e.target.value)} type="text" id="goalName" className="form-control mt-2" placeholder="Enter the name of goal" />
              
              <button type="submit" className="btn btn-success d-block mx-auto">
                Create Goal
              </button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default Goals