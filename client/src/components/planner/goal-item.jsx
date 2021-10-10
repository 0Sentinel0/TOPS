import React from "react";

const GoalItem = ({goal, onSelect}) => {
  return (
    <li id="choose-goals" key={goal._id} className="list-group-item">
      <div className="form-check">
        <input 
          onChange={(e) => onSelect(e.target.checked, goal)} className="form-check-input" type="checkbox" id={goal._id} />
        <label className="form-check-label" htmlFor={goal._id}>
          <b>{goal.name}</b>
        </label>
      </div>
    </li>
  )
}

export default GoalItem