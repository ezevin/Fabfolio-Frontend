import React, { Component } from 'react'

import './NavBar.css'

class NavBar extends Component {
  render(){
    return (
      <div>
      <h1>FABFOLIO:</h1>
      <h3>A Fabricator's Portfolio </h3>
      <p> Welcome Name </p>
      <button>Gallery</button>
      <button>Friends</button>
      <button> Login/Logout Link </button>
      </div>
    )
  }
}

export default NavBar
