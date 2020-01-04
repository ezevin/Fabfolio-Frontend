import React, { Component } from 'react';

import './App.css';

import NavBar from './Components/NavBar/NavBar.js'
import Home from './Components/HomePage/Home/Home.js'

class App extends Component {
  state = {
    projects: [],
    supplies: [],
  }

  componentDidMount(){
    this.fetchNotes()
    this.fetchResearch()
    this.fetchToDoList()
  }

  //check user//

  //fetch data //
  fetchResearch = () => {
    fetch('https://fabfolio-backend.herokuapp.com/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }

  fetchToDoList = () => {
    fetch('https://fabfolio-backend.herokuapp.com/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }

  fetchNotes = ()=> {
    fetch('https://fabfolio-backend.herokuapp.com/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }

  fetchProjects = () => {
    // let id = this.state.currentUser.id
    fetch(`https://fabfolio-backend.herokuapp.com/api/v1/projects`)
    .then(res => res.json())
    .then(data => this.setState({projects: data}))
    // this.setState({id: id})
  }

  fetchSupplies = () => {
    // let id = this.state.currentUser.id
    fetch(`https://fabfolio-backend.herokuapp.com/api/v1/materials`)
    .then(res => res.json())
    .then(data => this.setState({supplies: data}))
  }


  render (){

    const projects = this.state.projects.filter(project  => (
      project.finished === false
    ))
    const finished = this.state.projects.filter(project => (
      project.finished
    ))

    return (
      <div className="mainGrid">
          <NavBar />
          <Home
            fetchProjects={this.fetchProjects}
            projects={projects}
            finished={finished}
            fetchSupplies={this.fetchSupplies}
            supplies={this.state.supplies}
          />
      </div>
    )
  }
}

export default App;
