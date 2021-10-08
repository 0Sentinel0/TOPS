import React from "react";

const ActsListInPlanner = ({ArrForRender}) => {
  console.log(ArrForRender)

  return (
    <div className="list card">
      <ul className="list-group list-group-flush">
        {
          ArrForRender.map(activity => {
            return (
              <li key={activity._id} className="list-group-item">
                { activity.name }
                { activity.contribu ?
                    <span className="ms-3">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </span>
                    :
                    <span className="ms-3">
                      <i className="bi bi-star-fill"></i>
                    </span> }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ActsListInPlanner