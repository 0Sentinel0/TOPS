import React from 'react'
import './form.css'

const GenericIput = ({label, inputName, type, descrip, onChange}) => {
  console.log(inputName)
      switch (type)  {
        default:
          return(
            <div className="generic-input-wrap p-2">
              <label htmlFor={inputName}>{label}</label>
              <p>{descrip}</p>
              <input onChange={(e) => onChange(e.target.value, inputName)} id={inputName} type={type} name={inputName} className="form-control" />
            </div>
          )
        case 'checkbox':
          return(
            <div className="generic-input-wrap p-2">
              <input onChange={(e) => onChange(e.target.value, inputName)} id={inputName} type={type} name={inputName} className="form-check-label" />
              <label className="form-check-label ms-2" htmlFor={inputName}>
                { label }
              </label>
            </div>
          )
      }
    }
 
export default GenericIput