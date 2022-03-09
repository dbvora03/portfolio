import React from 'react'
import mainStyles from '../styles/Main.module.css'
import { listOfHackathons } from './data'

const Hackathons = () => {

  const hackathons = () => listOfHackathons.map((hackathon) => {
    return (    
      <div key={hackathon.name} className={mainStyles.list_text}>
        <p><strong className={mainStyles.strong} ><a href={hackathon.link} >{hackathon.name}</a></strong> - {hackathon.description}</p>
      </div>
      )
  })


  return (
    <> 
      <h3>Hackathons</h3>
      {hackathons()}
    </>

  )
}

export default Hackathons