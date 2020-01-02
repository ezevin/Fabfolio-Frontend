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
    const { id, name, details, budget, start, due, finished, finished_image, inventory, notes, research, to_do } = this.props

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
              id={id}
              name={name}
              details={details}
              budget={budget}
              start={start}
              due={due}
              inventory={inventory}
              notes={notes}
              research={research}
              to_do={to_do}
            />
          }
        </ul>
      </div>
    )
  }
}

export default Projects
