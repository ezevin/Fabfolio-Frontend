import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header/Header.js'
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
        // const projectTitles = this.state.projects.map(project => {
    //   console.log(project.title);
    // })
    return (
      <>
      <Header />
      <Home
        fetchProjects={this.fetchProjects}
        projects={this.state.projects}
        fetchSupplies={this.fetchSupplies}
        supplies={this.state.supplies}
      />
      </>
    )
  }
}

export default App;
