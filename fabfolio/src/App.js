import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header/Header.js'
import Home from './Components/HomePage/Home/Home.js'

class App extends Component {
  state = {
    projects: [],
    materials: [],
  }

  componentDidMount(){
    this.fetchNotes()
    this.fetchResearch()
    this.fetchToDoList()
  }

  //check user//

  //fetch data //
  fetchResearch = () => {
    fetch('http://localhost:3000/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }

  fetchToDoList = () => {
    fetch('http://localhost:3000/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }

  fetchNotes = ()=> {
    fetch('http://localhost:3000/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }

  fetchProjects = () => {
    // let id = this.state.currentUser.id
    fetch(`http://localhost:3000/api/v1/projects`)
    .then(res => res.json())
    .then(data => this.setState({projects: data}))
    // this.setState({id: id})
  }


  render (){
    // const projectTitles = this.state.projects.map(project => {
    //   console.log(project.title);
    // })
    return (
      <>
      <Header />
      <Home
        fetchProjects={this.fetchProjects}
        projects={this.state.projects}
      />
      </>
    )
  }
}

export default App;
