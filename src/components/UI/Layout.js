import React from 'react'
import Navbar from './Navbar'

import * as styles from '../../styles/UI/layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main className={styles.content}>
            {children}
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
