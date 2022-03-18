import React from 'react'
import Navbar from './Navbar'

import * as styles from '../../styles/UI/layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main className={styles.content}>
            <Navbar />
            {children}
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
