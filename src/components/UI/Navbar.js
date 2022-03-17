import React from 'react'
import * as styles from '../../styles/UI/navbar.module.scss'

import { Link } from 'gatsby'
import Button from './Button'

const Navbar = () => {
    return (
      <ul className={styles.navbar}>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
        <li>
          <Button link="/resume.pdf">Resume</Button>
        </li>
      </ul>
    )
}

export default Navbar