import React from 'react'
import mainStyles from '../styles/Main.module.css'
import {listOfProjects, listOfEverything} from './data'

const Projects = () => {

  const projects = () => listOfEverything.map((project) => {
    if (project.type == "Project") {
      return (    
        <div key={project.name} className={mainStyles.list_text}>
          <p><strong className={mainStyles.strong} ><a href={project.link} >{project.name}</a></strong> - {project.description}</p>
        </div>
      )
    } else {
      return null;
    }
  })


  return (
    <> 
      <h3>Projects</h3>
      {projects()}
    </>

  )
}

export default Projects