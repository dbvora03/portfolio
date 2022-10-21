import React from 'react'
import mainStyles from '../styles/Main.module.css'
import { listOfEverything } from './data'

const All = () => {

  const list = () => listOfEverything.map((item) => {
    return (    
        <div key={item.name} className={mainStyles.list_text}>
            <p><strong className={mainStyles.strong} ><a href={item.link} >{item.name}</a></strong> - {item.description}</p>
        </div>
    )
  })


  return (
    <> 
      <h3>Some of my coolest work</h3>
      {list()}
    </>

  )
}

export default All