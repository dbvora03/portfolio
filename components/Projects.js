import React from 'react'

const listOfProjects = [
  {
    name: "Seashell",
    description: "This is a sample description",
    technologies: [],
    link: "https://github.com/dbvora03/sea-shell"
  }




]


const Projects = () => {

  const projects = () => listOfProjects.map((project) => {
    return (    
      <div key={project.name}>
        <p><strong>{project.name}</strong> - {project.description}</p>
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