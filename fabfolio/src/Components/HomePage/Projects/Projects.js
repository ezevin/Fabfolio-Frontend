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
    const { name } = this.props

    return (
      <div>
        <ul>
          <button id={this.props.id} onClick={this.openModal}>
            {name}
          </button>
          {
            this.state.open && <Backdrop />
          }
          {
            this.state.open && <Modal
              closeModal={this.closeModal}
              name={this.props.name}
              details={this.props.details}
              budget={this.props.budget}
              start={this.props.start}
              due={this.props.due}
              finished={this.props.finished}
              finished_image={this.props.finished_image}
              inventory={this.props.inventory}
              notes={this.props.notes}
              research={this.props.research}
              to_do={this.props.to_do}
            />
          }
        </ul>
      </div>
    )
  }
}

export default Projects
