import React, { Component } from 'react'
import './form.css'
import OnboarderFormInput from './onboarder-input'

class OnboarderForm extends Component {
  state = {
    onborderFormFields: [
      {
        desc: 'Kanban',
        id: 'qOnboard001'
      },
      {
        desc: 'Microservices',
        id: 'qOnboard002'
      },
      {
        desc: 'VS Code',
        id: 'qOnboard003'
      },
      {
        desc: 'Git',
        id: 'qOnboard004'
      },
      {
        desc: 'Mob Programming',
        id: 'qOnboard005'
      },
      {
        desc: 'Angualr',
        id: 'qOnboard006'
      },
    ]
  }

  inputHandler = (inputValue, name) => {
    // console.log(inputValue)
    console.log(name)
  }

  render() {
    const {onborderFormFields} = this.state
    return (
      <div id="formpage-outerwrap">
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <i className="bi bi-check-circle"></i>&nbsp;
          The onboarder is assigned to join
            <span id="team-name"> Team A</span>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <h3>Onboarder Information</h3>
        <hr />

        <section id="onborder-form-wrap">
          <div className="tech-profile">
            <h6><b>Team A Tech Profile</b></h6>

            <div className="tech-badge">
              Agile Method 
              <span className="badge rounded-pill bg-success">
                Kanban
              </span>
            </div>
            <div className="tech-badge">
              Architectural Style 
              <span className="badge rounded-pill bg-success">
                Microservices
              </span>
            </div>
            <div className="tech-badge">
              IDE/Editor 
              <span className="badge rounded-pill bg-success">
                VS Code
              </span>
            </div>
            <div className="tech-badge">
              Version Control 
              <span className="badge rounded-pill bg-success">
                Git
              </span>
            </div>
            <div className="tech-badge">
              Method 
              <span className="badge rounded-pill bg-success">
                Mob
              </span>
            </div>
            <div className="tech-badge">
              Framework 
              <span className="badge rounded-pill bg-success">
                Angular
              </span>
            </div>
            <div className="tech-badge">
              Language 
              <span className="badge rounded-pill bg-success">
                TypeScript
              </span>
            </div>
            <div className="tech-badge">
              Database 
              <span className="badge rounded-pill bg-success">
                MongoDB
              </span>
            </div>
          </div>
          <hr />

          <h6 className="pt-2"><b>Onborder Form</b></h6>
          <form id="onboarder-form">
            <p style={{fontSize: '10px'}}>
              <i>How familiar are you with the following skill aera adopted by Team A?</i>
            </p>
            {
              onborderFormFields.map(question => {
                return <OnboarderFormInput key={question.id} desc={question.desc} id={question.id} />
              })
            }

           <div className="text-center pt-2">
             <button className="btn btn-success" type="submit">Submit</button>
             <a href="/" className="btn btn-secondary ms-3">Exit</a>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default OnboarderForm