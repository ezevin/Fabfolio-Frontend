import React, { Component } from 'react'

import './Projects.css'

class Projects extends Component  {
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
