import React, { Component } from 'react'
import SupportImag from './support.png'

class Home extends Component {
  newProcess() {
    
  }

  render() {
    return (
      <div id="home-wrap">
        <div id="honme-inner-wrap">
          <div className="w-50 mx-auto">
            <img src={SupportImag} width="100%" height="auto" alt="img"/>
          </div>
          <h5 id="home-welcome">
            Welcome to Team Onboarding Process Support App!
          </h5>
          <div id="home-buttons" className="mt-5">
            <a href="/Planner" className="btn btn-success d-block mx-auto" >
              <i className="bi bi-plus-circle"></i> 
              <span className="ms-3">New Onboarding Plan</span>
            </a>
            <a href="/Onboarder" className="btn btn-primary d-block mx-auto mt-3 mt-lg-4">
              <i className="bi bi-card-list"></i>
              <span className="ms-2">Capture Onboarder Info</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home