import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render(){
    return (
      <>
      <h1>FABFOLIO:</h1>
      <h3>A Fabricator's Portfolio </h3>
      <p> Welcome Name </p>
      <button> Home Link </button>
      <button> Gallery Link </button>
      <button> Current Projects Link </button>
      <button> Login/Logout Link </button>
      </>
    )
  }
}

export default Header
