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
            <Link href='/resume.pdf'>
              <a>Resume</a>
            </Link>
            
            <a>Email</a>
            <a>Twitter</a>
            <a>Linkedin</a>
            <a>GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}