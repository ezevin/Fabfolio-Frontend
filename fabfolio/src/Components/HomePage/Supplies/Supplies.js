import React, { Component } from 'react'

import './Supplies.css'

class Supplies extends Component {
  render(){
    // console.log(this.props);
    return (
      <div>
        <ul>
          <li>
            {this.props.item}
          </li>
        </ul>
      </div>
    )
  }
}

export default Supplies
