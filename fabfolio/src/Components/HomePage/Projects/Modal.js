import React, { Component } from 'react';

import "./Modal.css"
import ToDo from './ToDo/ToDo.js'
import Notes from './Notes/Notes.js'
import Inventory from './Inventory/Inventory.js'

class Modal extends  Component {

  render(){
    const { name, details, budget, start, due, inventory, notes, research, to_do } = this.props

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
                    <Notes
                      key={note.id}
                      id={note.id}
                      note={note.note}
                    />
                  ))}
                </div>
                <div className="trioBox">
                  <center> to do list </center>
                  {to_do.map(todo => (
                    <ToDo
                      key={todo.id}
                      id={todo.id}
                      item={todo.item}
                      complete={todo.complete}/>
                  ))}
                </div>
                <div className="trioBox">
                  <center> inventory </center>
                  {inventory.map(item => (
                    <Inventory
                      key={item.id}
                      id={item.id}
                      item={item.label}
                      price= {item.price}
                      description= {item.description}
                      image_url= {item.image_url}
                      place_purchased= {item.place_purchased}
                    />
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

export default Modal
