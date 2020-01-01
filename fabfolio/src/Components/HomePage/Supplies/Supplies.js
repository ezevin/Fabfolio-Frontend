import React, { Component } from 'react'

import './Supplies.css'
import Backdrop from '../../Backdrop/Backdrop.js'
import Modal from './Modal'

class Supplies extends Component {

  state = {
    open: false
  }

  openModal = () =>{
    this.setState({open: true})
  }

  closeModal = () => {
    this.setState({open: false})
  }

  render(){
    const { item, quantity, price, description, image_url, place_purchased } = this.props

    return (
      <div>
        <ul>
          <div>
            <button onClick={this.openModal}>
            {item} - {quantity}
            </button>
            {
              this.state.open && <Backdrop />
            }
            {
              this.state.open && <Modal
                closeModal={this.closeModal}
                item={item}
                quantity={quantity}
                price= {price}
                description= {description}
                image_url= {image_url}
                place_purchased= {place_purchased}
              />
            }
          </div>
        </ul>
      </div>
    )
  }
}

export default Supplies
