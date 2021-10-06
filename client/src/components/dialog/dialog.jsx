import React, { Component }  from 'react'
import ActItemInDialog from "../activities/actItemDialog";
import '../../index.css'

class Dialog extends Component {
  state = {
    actsOfCurGoal: []
  }

  findIndex = obj => this.state.actsOfCurGoal.indexOf(obj)
  
  selectHandler = (e, Act) => {
    const acts = this.state.actsOfCurGoal
    e ?
      this.setState(
        {actsOfCurGoal: [...this.state.actsOfCurGoal, Act]},
        () => console.log(this.state.actsOfCurGoal)
      )
    :
    (() => {
      acts.splice(this.findIndex(Act), 1)
      this.setState(
        {actsOfCurGoal: acts},
        () => console.log(this.state.actsOfCurGoal)
      )
    })()
  }

  render() {
    const {data, onClose, actsList} = this.props
    return (
      <div id="dialog-wrap" className="card mx-auto">
        <button onClick={onClose} type="button" id="dialog-close-button" className="btn-close btn-lg"></button>
        <div className="card-body">
          <h5 className="card-title">
            <i className="bi bi-trophy-fill"></i> 
            {data.name}
          </h5>

          <h6 className="mt-3">Map Activities</h6>
          <div id="acts-list-dialog" className="list">
            <ul className="list-group list-group-flush" >
              {
                actsList.map(Act => {
                  return(
                    <ActItemInDialog Act={Act} onSelect={this.selectHandler} key={Act._id}  />
                  )
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