import React, { Component } from 'react'
import './form.css'
import GenericIput from './input'

class OrgInfoForm extends Component {
  state = {
    orgForm: [
      {
        inputName: 'manager',
        label: 'Who is the team leader the team manager reports to?',
        type: 'text'
      },
      {
        inputName: 'chart',
        label: 'Where is an organisational chart available?',
        type: 'text'
      },
      {
        inputName: 'induction',
        label: 'Is there an Induction program for new employees',
        descrip: 'If so how/when can this be accessed?',
        type: 'text'
      },
       {
        inputName: 'funds',
        label: 'What funds are available for the onboarder to attend formal courses?',
        type: 'text'
      },
      {
        inputName: 'mentor',
        label: 'Is there a qualified suitable mentor available for the new employee?',
        type: 'checkbox'
      },
    ],
  }

  render() {
    return(
      <div id="formpage-outerwrap">
        <h3>Organisation Information</h3>
        <hr />
        <p>Please fill in the following form to generate new onboarding schedule:</p>

        <form>
          {
            this.state.orgForm.map(input => (
              <GenericIput label={input.label} inputName={input.inputName} type={input.type} descrip={input.descrip} onChange={this.inputHandler}/>
            ))
          }
        </form>
      </div>
    )
  }
}

export default OrgInfoForm