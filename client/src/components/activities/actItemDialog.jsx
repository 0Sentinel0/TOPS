import React from "react";

const ActItemInDialog = ({Act, check, onSelect}) => {
  return (
    <li id="choose-goals" key={Act._id} className="list-group-item">
      <div className="form-check">
        <input 
          onChange={(e) => onSelect(e.target.checked, Act)} className="form-check-input" type="checkbox" checked={check} id={Act._id} />
        <label className="form-check-label ms-1" htmlFor={Act._id}>
          {Act.name}
          <span className="ms-2">
            {
              Act.contribu
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