import Head from 'next/head'
import Layout from '../components/Layout'
import Hackathons from '../components/Hackathons'
import Projects from '../components/Projects'
import styles from '../styles/Main.module.css'
import { useState } from 'react'
import Other from '@/components/Other'
import All from '@/components/All'

export default function Home() {

  const [optionSelect, setOptionSelect] = useState("all")

  const resultsRender = () => {
    if (optionSelect === "all") {
      return <All/>
    } else if (optionSelect === "projects") {
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
      <p className={styles.paragraph} >I{"'"}m a third year student at the University of Waterloo studying Computer Engineering</p>
      
      <p className={styles.paragraph}> What am I up to right now?:</p>
      <ul>
        <li className={styles.paragraph}>I{"'"}m working on <strong className={styles.strong}>Aria Music</strong>, an app that gives artists the funds they deserve</li>
        <li className={styles.paragraph}>I{"'"}m also working at <strong className={styles.strong}>KPMG</strong> as a Software Engineer Consultant, where I{"'"}m developing:</li>
        <ul>
          <li className={styles.paragraph}>The <strong className={styles.strong}>#1 Pay Equity Tool</strong> in the country</li>
          <li className={styles.paragraph}>The <strong className={styles.strong}>NFT</strong> minting platform for our internal recognition system</li>
          <li className={styles.paragraph}>An authentication API for our land in the <strong className={styles.strong}>Metaverse</strong></li>
        </ul>
        {/*<li className={styles.paragraph}>Recently, I{"'"}ve also joined <strong className={styles.strong}>Aria</strong> as a lead dev, where we're making a decentralized record label </li>*/}

      </ul>
      <p className={styles.paragraph}>If you wanted to talk about collecting records, De-Fi, investing, or anything random, let's connect! </p>
      <hr></hr>
      <div className={styles.header}>
        <a className={styles.options_bar} onClick={() => setOptionSelect("all")}>All</a>
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