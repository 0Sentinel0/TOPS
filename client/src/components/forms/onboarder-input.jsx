import React from 'react'
import './form.css'

const OnboarderFormInput = ({ desc, id }) => {
  return(
    <div style={{marginBottom: '20px'}}>
      <div style={{padding: '3px 15px'}}>
        <p><b>{desc}</b></p>
        <div className="checks-wrap">
          <input className="form-check-input" id={id + '-none'} name={desc} type="radio" />
          <label className="form-check-label ps-1" htmlFor={id + '-none'}>None</label>
        </div>
  
        <div className="checks-wrap">
          <input className="form-check-input" id={id + '-beginner'} name={desc} type="radio" />
          <label className="form-check-label ps-1" htmlFor={id + '-beginner'}>Beginner</label>
        </div>
        
        <div className="checks-wrap">
          <input className="form-check-input" id={id + '-some'} name={desc} type="radio" />
          <label className="form-check-label ps-1" htmlFor={id + '-some'}>Some Capability</label>
        </div>
        
        <div className="checks-wrap">
          <input className="form-check-input" id={id + '-good'} name={desc} type="radio" />
          <label className="form-check-label ps-1" htmlFor={id + '-good'}>Good Experience</label>
        </div>
  
        <div className="checks-wrap">
          <input className="form-check-input" id={id + '-expert'} name={desc} type="radio" />
          <label className="form-check-label ps-1" htmlFor={id + '-expert'}>Expert</label>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default OnboarderFormInput