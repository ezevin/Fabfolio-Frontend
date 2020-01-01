import React, { Component } from 'react'

import './ToDo.css'

class ToDo extends Component {

  render(){
    return(
      <ul >
        <li>
            {this.props.item}
        </li>
      </ul>
    )
  }
}

export default ToDo
