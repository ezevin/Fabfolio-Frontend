import React, { Component } from 'react'

import './Home.css'
import Projects from '../Projects/Projects.js'
import Supplies from '../Supplies/Supplies.js'
import Gallery from '../Gallery/Gallery.js'

class Home extends Component {

  componentDidMount(){
    this.props.fetchProjects()
    this.props.fetchSupplies()
  }

  render(){
    const {  projects, supplies, finished } = this.props
    console.log(finished);
    return(
      <div>
        <div className="homeGrid">
        <center>
          <h1 className="projectlist"> Project List </h1>
        </center>
        <center>
          <h1 className="inventorylist">Inventory </h1>
        </center>
          <div className="projectContainer">
              {projects.map(project => (
                <Projects
                  key={project.id}
                  id={project.id}
                  name={project.title}
                  details={project.details}
                  budget={project.budget}
                  start={project.start_date}
                  due={project.due_date}
                  finished={project.finished}
                  finished_image={project.finished_image}
                  inventory={project.inventories}
                  notes={project.notes}
                  research={project.researches}
                  to_do={project.to_do_lists}
                />
              ))}
          </div>
          <div className="supplyContainer">
            {supplies.map(supply => (
              <Supplies
                key={supply.id}
                item={supply.label}
                quantity={supply.quantity}
                price= {supply.price}
                description= {supply.description}
                image_url= {supply.image_url}
                place_purchased= {supply.place_purchased}
              />
            ))}
          </div>
        </div>
        <div className="galleryContainer">
          <center>
            <h1> Photo Gallery </h1>
            <div className="galleryGrid">
              {finished.map(finish => (
                <Gallery
                  key={finish.id}
                  id={finish.id}
                  name={finish.title}
                  image={finish.finished_image}
                />
              ))}
            </div>
          </center>
        </div>
      </div>
    )
  }
}

export default Home
