import React, { Component } from 'react'

class Projects extends Component  {
  render(){
    console.log(this.props);
    return (
      <div><ul><li>{this.props.names}</li></ul></div>
    )
  }
}

export default Projects
