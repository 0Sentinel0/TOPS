import React, { Component }  from 'react'
import axios from 'axios';
import '../../index.css'
import GenericCardItem from '../activities/item';

class Dialog extends Component {
  state = {
    actsOfCurGoal: [],
    actObj: {},
    actIntendToAddContribu: false
  }

  componentDidMount() {
    const { data } = this.props
    if(data.acts[0]) {
      this.setState(
        { actsOfCurGoal: data.acts },
        () => console.log('state.actsOfCurGoal:', this.state.actsOfCurGoal)
      )
    }
  }

  findActObj = name => {
    let actObj = {}
    for(let act of this.props.actsList) {
      if(act.name === name && act.contribu === this.state.actIntendToAddContribu) return actObj = act
    }
    return actObj
  }

  contribuHandler = isVeryHigh => {
    this.setState({
      actIntendToAddContribu: isVeryHigh
    })
  }

  actNameHandler = e => {
    const actName = e.target.value
    this.setState({actObj: this.findActObj(actName)})
  }

  mapActs = e => {
    e.preventDefault()
    const { name, _id } = this.props.data
    this.setState(
      {
        actsOfCurGoal: [...this.state.actsOfCurGoal, this.state.actObj]
      },
      () => {
        const newGoal = {
          acts: this.state.actsOfCurGoal
        }
        console.log('NewGoal:', newGoal)
        axios.put('api/goals/' + _id, newGoal)
          .then(res => {
            console.log(res)
            alert('New Act Added to ' + name)
          })
          .catch(err => {
            console.log(err) 
            alert('Error!')
          })
      }
    )
  }

  render() {
    const { data, onClose } = this.props
    const { actObj, actsOfCurGoal } = this.state
    return (
      <div id="dialog-wrap" className="card mx-auto">
        <button onClick={onClose} type="button" id="dialog-close-button" className="btn-close btn-lg"></button>
        <div className="card-body">
          <small>Map Activities Of</small>
          <h6 className="card-title">
            <i className="bi bi-trophy-fill"></i>&nbsp;
            <b>{data.name}</b>
          </h6>
          <p style={{fontSize: '10px'}}>id: {data._id}</p>
          <hr />

          <form onSubmit={this.mapActs}  className="mt-1">
           <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="activityContibu">Very High Contribution</label>
              <input onChange={(e) => this.contribuHandler(e.target.checked)} className="form-check-input" type="checkbox" id="activityContibu" />
           </div>
            <label htmlFor="act-name">Enter Activity:</label>
            <input onChange={(e) => this.actNameHandler(e)} className="form-control" id="act-name" type="text" />
            <input className="btn btn-sm btn-secondary" type="reset" defaultValue="Reset" />  
            <button className="btn btn-sm btn-success my-2 ms-2" type="submit">
              Add Activity
            </button>
            {!actObj._id && <p>Not Found!</p> }
            {
              actObj._id && 
              <div style={{border: '1px solid gray', padding: '10px'}}>
                <p>Act id: {actObj._id}</p>
                {actObj.contribu === true && <b>Very High Contribu</b>}
              </div>
            }
          </form>

          <div id="acts-list-dialog" className="list">
            <ul className="list-group list-group-flush">
              {
                actsOfCurGoal.length > 0 ?
                  actsOfCurGoal.map(Act => {
                    return <GenericCardItem item={Act} key={Act._id} />
                  })
                :
                <p>No Activity for This Goal</p>
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Dialog