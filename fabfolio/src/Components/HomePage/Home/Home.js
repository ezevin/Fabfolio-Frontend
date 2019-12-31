import React, { Component } from 'react'

import './Home.css'
import Projects from '../Projects/Projects.js'

class Home extends Component {

  componentDidMount(){
    this.props.fetchProjects()
  }

  render(){

    return(
      <>
      {this.props.projects.map(project => (
        <Projects names={project.title} />
      ))}
      <div> Inventory </div>
      <div> Photo Gallery </div>
      </>
    )
  }
}

export default Home
