import React from 'react'
import mainStyles from '../styles/Main.module.css'
import { listOfHackathons, listOfEverything } from './data'

const Hackathons = () => {

  const hackathons = () => listOfEverything.map((hackathon) => {
    if (hackathon.type == "Hackathon") {
      return (    
        <div key={hackathon.name} className={mainStyles.list_text}>
          <p><strong className={mainStyles.strong} ><a href={hackathon.link} >{hackathon.name}</a></strong> - {hackathon.description}</p>
        </div>
      )
    } else {
      return null
    }
  })


  return (
    <> 
      <h3>Hackathons</h3>
      {hackathons()}
    </>

  )
}

export default Hackathons