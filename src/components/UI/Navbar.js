import React from 'react'
import * as styles from '../../styles/UI/navbar.module.scss'

import Button from './Button'

const Navbar = () => {
    return (
      <ul className={styles.navbar}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Button link='/resume.pdf'>Resume</Button>
        </li>
      </ul>
    )
}

export default Navbar