import React, { Component } from 'react'

import './Projects.css'

class Projects extends Component  {
  render(){
    return (
      <div>
        <ul>
          <li id={this.props.id}>
            {this.props.names}
          </li>
        </ul>
      </div>
    )
  }
}

export default Projects
