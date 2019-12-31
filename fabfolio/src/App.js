import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header/Header.js'

class App extends Component {
  state = {

  }

  componentDidMount(){
    this.checkUser()
    this.fetchNotes()
    this.fetchResearch()
    this.fetchToDoList()
  }

  //check user//
  checkUser(){
    const token = localStorage.getItem('token')
    console.log("token is", token);
    if(token){
      fetch('http://localhost:3000/api/v1/current_user', {
        headers: {
          Authorization: token
        }
      })
      .then(res => res.json())
      .then((user) => {
        if (!user.error){
          this.setState({currentUser: user})
        }
        let id = this.state.currentUser.id
        fetch(`http://localhost:3000/api/v1/users/${id}`)
        .then(res => res.json())
        .then(data => this.setState({projects: data.projects, materials: data.materials, user: data}))
        this.setState({id: id})
      })
    }
  }

  //fetch data //
  fetchResearch(){
    fetch('http://localhost:3000/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }

  fetchToDoList(){
    fetch('http://localhost:3000/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }

  fetchNotes(){
    fetch('http://localhost:3000/api/v1/researches')
    .then(res => res.json())
    .then(data => this.setState({allResearch: data}))
  }


  render (){
    return (
      <Header />
    )
  }
}

export default App;
