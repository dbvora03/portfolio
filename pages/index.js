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
      
      <p className={styles.paragraph}> What am I up to right now?</p>
      <ul>
        <li className={styles.paragraph}>During the day, I{"'"}m hustling at school </li>
        <li className={styles.paragraph}>During my nights and weekends, I{"'"}m doing contract work for <strong className={styles.strong}>Aria Music</strong>, a project that changes the way artists earn the cut they deserve</li>
      </ul>
      <p className={styles.paragraph}>Previously, I was helping <strong className={styles.strong}>ether.fi</strong> build a non-custodial decentralized staking protocol, helped <strong className={styles.strong}>KPMG</strong> increase their presence in the NFT space, and expanded test automation at <strong className={styles.strong}>Dropbase</strong></p>
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