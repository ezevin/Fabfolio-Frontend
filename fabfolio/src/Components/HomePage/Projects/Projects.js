import React, { Component } from 'react'

import './Projects.css'
import Backdrop from '../../Backdrop/Backdrop.js'
import Modal from './Modal'

class Projects extends Component  {

  state = {
    open: false
  }

  openModal = () =>{
    this.setState({open: true})
  }

  closeModal = () => {
    this.setState({open: false})
  }
  
  render(){
    return (
      <div>
        <ul>
          <button id={this.props.id}>
            {this.props.names}
          </button>
        </ul>
      </div>
    )
  }
}

export default Projects
