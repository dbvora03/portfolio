import Head from 'next/head'
import Layout from '../components/Layout'
import Hackathons from '../components/Hackathons'
import Projects from '../components/Projects'
import styles from '../styles/Main.module.css'
import { useState } from 'react'
import Other from '@/components/Other'

export default function Home() {

  const [optionSelect, setOptionSelect] = useState("")

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
      <p className={styles.paragraph} >I{"'"}m a second year student at the University of Waterloo studying Computer Engineering. Currently, I'm building <strong className={styles.strong} >Web3Preferences</strong> and <strong className={styles.strong} >Seashell</strong>.</p>
      <p>I{"'"}m also interning as a software engineer at <strong className={styles.strong} >KPMG Canada</strong>, where I{"'"}m desigining NFT Minting DApps and Pay Equity calculation tools.</p>
      <p>On my free time, I love collecting records (hmu if you do too).</p>
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