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
            <button className="btn btn-success" onClick={this.newProcess}>
              New Onboarding Process
            </button>
            <p>Or</p>
            <button className="btn btn-primary" >
              Browse Schdeules
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home