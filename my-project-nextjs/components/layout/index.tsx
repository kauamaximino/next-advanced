import { ReactElement } from 'react'
import Navbar from '../navbar'
import styles from './Layout.module.css'

type Props = {
  children: ReactElement
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <h1>Header</h1>
      </header>

      <Navbar/>

      <main>
        {children}
      </main>

      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}