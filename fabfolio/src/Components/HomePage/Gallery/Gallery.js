import React, { Component } from 'react'

import './Gallery.css'

class Gallery extends Component {
  render(){
    const { image, name } = this.props
    console.log(this.props);
    return(
        <img className="galleryImage" src={image} alt={name} />
    )
  }
}

export default Gallery
