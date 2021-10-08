import React, { Component }  from 'react'
import ActItemInDialog from "../activities/actItemDialog";
import '../../index.css'
// import axios from 'axios';

class Dialog extends Component {
  state = {
    actsOfCurGoal: []
  }

  componentDidMount() {
    const { data } = this.props
    console.log(data)
    if(data.acts[0]) {
      this.setState(
        { actsOfCurGoal: data.acts },
        () => console.log('state', this.state.actsOfCurGoal)
      )
    }
  }

  findIndex = obj => this.state.actsOfCurGoal.indexOf(obj)
  
  ifCheck = actId => {
    let check = false
    this.state.actsOfCurGoal.forEach(act => {
      return act._id === actId ? check = true : check = false
    })
    return check
  }
  
  selectHandler = (e, Act) => {
    const acts = this.state.actsOfCurGoal
    e ?
      this.setState(
        {actsOfCurGoal: [...this.state.actsOfCurGoal, Act]},
        () => this.mapActs(this.state.actsOfCurGoal)
      )
    :
    (() => {
      acts.splice(this.findIndex(Act), 1)
      this.setState(
        {actsOfCurGoal: acts},
        () => this.mapActs(this.state.actsOfCurGoal)
      )
    })()
  }

  mapActs = data => {
    console.log('mapping:', data)
    // axios.post('api/goals/')
  }

  render() {
    const {data, onClose, actsList} = this.props
    return (
      <div id="dialog-wrap" className="card mx-auto">
        <button onClick={onClose} type="button" id="dialog-close-button" className="btn-close btn-lg"></button>
        <div className="card-body">
          <h5 className="card-title">
            <i className="bi bi-trophy-fill"></i>&nbsp;
            {data.name}
          </h5>
          <p>id: {data._id}</p>

          <h6 className="mt-3">Map Activities</h6>
          <div id="acts-list-dialog" className="list">
            <ul className="list-group list-group-flush" >
              {
                actsList.map(Act => {
                  console.log(this.ifCheck(Act._id))
                  return this.ifCheck(Act._id) ?
                    <ActItemInDialog Act={Act} check={true} onSelect={this.selectHandler} key={Act._id} />
                  :
                    <ActItemInDialog Act={Act} check={false} onSelect={this.selectHandler} key={Act._id} />
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Dialog