import React, { Component } from 'react';

import "./Modal.css"

class DetailModal extends  Component {

  render(){
    const { name, details, budget, start, due, finished, finished_image, inventory, notes, research, to_do } = this.props

    return (
          <div className="projectmodal">
            <button className='close' onClick={this.props.closeModal}>X</button>
            <div className="">
              <div className="headerGrid">
                <div>
                  <div><b>Start Date:</b>{start}</div>
                  <div><b>Budget:</b>${budget}</div>
                </div>
                <div>
                <center><h1>{name}</h1></center>
                <center>{details}</center>
                </div>
                <div>
                  <div><b>Due Date:</b>{due}</div>
                  <div><b>Amount Spent:</b>$</div>
                </div>
              </div>
              <div className="trioGrid">
                <div className="trioBox">
                  <center> notes </center>
                  {notes.map(note => (
                    console.log(note)
                  ))}
                </div>
                <div className="trioBox">
                  <center> to do list </center>
                  {to_do.map(todo => (
                    console.log(todo)
                  ))}
                </div>
                <div className="trioBox">
                  <center> inventory </center>
                  {inventory.map(item => (
                    console.log(item)
                  ))}
                </div>
              </div>
              <div className="photoGrid">
                <div className="photoBox">
                  <center>Research Images</center>
                </div>
                <div className="photoBox">
                  <center>Process Pictures</center>
                </div>
              </div>
              <div className="buttonGrid">
                <button>Delete</button>
                <button className="right">Finish</button>
              </div>
            </div>
          </div>
    )
  }
}

export default DetailModal
