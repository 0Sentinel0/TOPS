import React from "react";

const Dialog = ({data, onClose}) => {
   return (
    <div id="dialog-wrap" className="card mx-auto">
      <button onClick={onClose} type="button" id="dialog-close-button" className="btn-close btn-lg"></button>
      <div className="card-body">
        <h5 className="card-title">
          <i className="bi bi-trophy-fill"></i> 
          <span>{data.name} Activities</span>
        </h5>
      </div>
    </div>
   )
 }
export default Dialog