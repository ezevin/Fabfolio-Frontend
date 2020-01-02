import React, { Component } from 'react'

import './Notes.css'

class Notes extends Component {
  render(){
    return(
      <div>
        <ul>
          <li>
            {this.props.note}
          </li>
        </ul>
      </div>
    )
  }
}

export default Notes
