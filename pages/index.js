import Head from 'next/head'
import Layout from '../components/Layout'
import Hackathons from '../components/Hackathons'
import Projects from '../components/Projects'
import styles from '../styles/Main.module.css'
import { useState } from 'react'

export default function Home() {

  const [optionSelect, setOptionSelect] = useState("")

  const resultsRender = () => {
    if (optionSelect === "projects") {
      return <Projects/>
    } else if (optionSelect === "hackathons") {
      return <Hackathons/>
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
      <h1>Hi there, I am Dhruv 👋 </h1>
      <p>I am a software developer who is interning @ <strong>KPMG Canada</strong>, where I am working on projects involving DApps and data analytics.</p>
      <p>I enjoy reading about distributed systems and designing decentralized applications.</p>
      <p>I also like Spongebob</p>
      <hr></hr>
      <div className={styles.header}>
        <a className={styles.options_bar} onClick={() => setOptionSelect("projects")} >Projects</a>
        <a className={styles.options_bar} onClick={() => setOptionSelect("hackathons")}>Hackathons</a>
      </div>
      <div style={{marginTop: 10}}>
        {resultsRender()}
      </div>
    </Layout>
  )
}