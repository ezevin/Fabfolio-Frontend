import React, { Component } from 'react'

import './Home.css'
import Projects from '../Projects/Projects.js'
import Supplies from '../Supplies/Supplies.js'

class Home extends Component {

  componentDidMount(){
    this.props.fetchProjects()
    this.props.fetchSupplies()
  }

  render(){
    const {  projects, supplies  } = this.props

    return(
      <div>
        <div className="homeGrid">
          <div className="projectContainer">
            <h1> Project List </h1>
            {projects.map(project => (
              <Projects
                key={project.id}
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
            <h1>Inventory </h1>
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
          <h1> Photo Gallery </h1>
        </div>
      </div>
    )
  }
}

export default Home
