import React, { Component } from 'react'
import './form.css'
import GenericIput from './input'

class TeamInfoForm extends Component {
  state = {
    teamForm: [
      {
        inputName: 'teamLeader',
        label: 'Who is the team leader',
        descrip: '',
        type: 'text'
      },
      {
        inputName: '',
        label: 'What are the main tasks expected of the new team member?',
        descrip: '',
        type: 'text'
      },
      {
        inputName: '',
        label: 'What are the main programming languages the team uses?',
        descrip: '',
        type: 'text'
      },
    ]
  }

  render() {
    return 
  }
}

export default TeamInfoForm