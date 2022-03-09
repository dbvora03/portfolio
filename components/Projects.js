import React from 'react'
import mainStyles from '../styles/Main.module.css'
import {listOfProjects} from '../../data'

const Projects = () => {

  const projects = () => listOfProjects.map((project) => {
    return (    
      <div key={project.name} className={mainStyles.list_text}>
        <p><strong className={mainStyles.strong} ><a href={project.link} >{project.name}</a></strong> - {project.description}</p>
      </div>
      )
  })


  return (
    <> 
      <h3>Projects</h3>
      {projects()}
    </>

  )
}

export default Projects