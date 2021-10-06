import React from "react";

const ActItemInDialog = ({Act, onSelect}) => {
  return (
    <li id="choose-goals" key={Act._id} className="list-group-item">
      <div className="form-check">
        <input 
          onChange={(e) => onSelect(e.target.checked, Act)} className="form-check-input" type="checkbox" id={Act._id} />
        <label className="form-check-label" htmlFor={Act._id}>
          {Act.name}
          <span className="ms-3">
            {
              Act.contribu === "on" 
              && 
              <>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </>
            }
          </span>
        </label>
      </div>
    </li>
  )
}

export default ActItemInDialog