import React, { Component } from 'react';

import "./Modal.css"

class DetailModal extends  Component {

  render(){
    const { item, quantity, price, description, image_url, place_purchased } = this.props

    return (
          <div className="modal">
            <button className='close' onClick={this.props.closeModal}>X</button>
            <div>
              {item}
              {quantity}
              {price}
              {description}
              {image_url}
              {place_purchased}
            </div>
          </div>
    )
  }
}

export default DetailModal
