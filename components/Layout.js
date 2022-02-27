import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import { useRouter } from 'next/router'

export default function Layout({title, keywords, description, children}) {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>
      <Header/>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Dhruv Vora',
  description: "Hi I'm Dhruv. This is my portfolio",
  keywords: 'Dhruv, Vora, Software Developer, Software, web3'
}