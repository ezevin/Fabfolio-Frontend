import React,{ Component } from 'react'

import './Inventory.css'

class Inventory extends Component {
  render(){
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

export default Inventory
