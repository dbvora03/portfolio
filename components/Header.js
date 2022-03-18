import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a href='/' >Resume</a>
            </Link>
            
            <a href='mailto:dbvora03@gmail.com' >Email</a>
            <a href='https://twitter.com/voratheexplora'>Twitter</a>
            <a href='https://linkedin.com/in/d3vora'>Linkedin</a>
            <a href='https://github.com/dbvora03'>GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}