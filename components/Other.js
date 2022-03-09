import React from 'react'
import mainStyles from '../styles/Main.module.css'
import { listOfOther } from '../../data'

const Other = () => {

  const render_other = () => listOfOther.map((other_item) => {
    return (    
      <div key={other_item.name} className={mainStyles.list_text}>
        <p><strong className={mainStyles.strong} ><a href={other_item.link} >{other_item.name}</a></strong> - {other_item.description}</p>
      </div>
      )
  })

  return (
    <> 
      <h3>Other Contributions</h3>
      {render_other()}
    </>

  )
}

export default Other