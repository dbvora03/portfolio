import Head from 'next/head'
import Layout from '../components/Layout'
import Hackathons from '../components/Hackathons'
import Projects from '../components/Projects'
import styles from '../styles/Main.module.css'
import { useState } from 'react'
import Other from '@/components/Other'

export default function Home() {

  const [optionSelect, setOptionSelect] = useState("projects")

  const resultsRender = () => {
    if (optionSelect === "projects") {
      return <Projects/>
    } else if (optionSelect === "hackathons") {
      return <Hackathons/>
    } else if (optionSelect == "other") {
      return <Other/>
    } else {
      return <></>
    }
  }

  return (
    <Layout >
      <Head>
        <title>Dhruv Vora</title>
        <meta name='description' content='Hello!'></meta>
      </Head>
      <h1>Hi there, I{"'"}m Dhruv 👋 </h1>
      <p className={styles.paragraph} >I{"'"}m a second year student at the University of Waterloo studying Computer Engineering. Currently, I{"'"}m a software engineering consultant for the Pay Equity project at <strong className={styles.strong} >KPMG Canada</strong>.</p>
      <p className={styles.paragraph}> Outside of school and work, I'm developing software in <strong className={styles.strong}>Web3</strong> space. I provide an array of services from smart contract development/auditing to full-stack development. Feel free to reach out if you have any big brain ideas.</p>
      <p className={styles.paragraph}>Oh btw, if you love collecting records, hmu cuz I do. </p>
      <hr></hr>
      <div className={styles.header}>
        <a className={styles.options_bar} onClick={() => setOptionSelect("projects")} >Projects</a>
        <a className={styles.options_bar} onClick={() => setOptionSelect("hackathons")}>Hackathons</a>
        <a className={styles.options_bar} onClick={() => setOptionSelect("other")}>Other</a>

      </div>
      <div style={{marginTop: 10}}>
        {resultsRender()}
      </div>
    </Layout>
  )
}