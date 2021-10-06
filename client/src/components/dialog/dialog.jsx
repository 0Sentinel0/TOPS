import React from "react";
import ActItemInDialog from "../activities/actItemDialog";

const Dialog = ({data, onClose, actsList}) => {
    const selectHandler = (e, Act) => {
      console.log(e)
      console.log(Act)
    }

   return (
    <div id="dialog-wrap" className="card mx-auto">
      <button onClick={onClose} type="button" id="dialog-close-button" className="btn-close btn-lg"></button>
      <div className="card-body">
        <h5 className="card-title">
          <i className="bi bi-trophy-fill"></i> 
          {data.name}
        </h5>

        <h6 className="mt-3">Map Activities</h6>
        <div className="list card">
          <ul className="list-group list-group-flush">
            {
              actsList.map(Act => {
                return(
                  <ActItemInDialog Act={Act} onSelect={selectHandler} key={Act._id}  />
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
   )
 }
export default Dialog