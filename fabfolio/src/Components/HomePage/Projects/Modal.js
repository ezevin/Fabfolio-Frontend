import React, { Component } from 'react';

import "./Modal.css"

class DetailModal extends  Component {

  render(){
    const { item, quantity, price, description, image_url, place_purchased } = this.props

    return (
          <div className="modal">
            <button className='close' onClick={this.props.closeModal}>X</button>
            <div className="modalGrid">
              <div>
                <img src={image_url} alt={item} />
              </div>
              <div>
                <h1>{item}</h1>
                <p><b>Quantity:</b> {quantity}</p>
                <p><b>Price:</b> ${price}</p>
                <p><b>Description:</b> {description}</p>
                <p><b>Place Purchased:</b> {place_purchased}</p>
              </div>
            </div>
          </div>
    )
  }
}

export default DetailModal
