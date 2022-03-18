import React from 'react'
import { navbar, navlinks, active } from '../../styles/UI/navbar.module.scss'

import { Link } from 'gatsby'
import Button from './Button'

const Navbar = () => {
  console.log(active)

  return (
    <nav className={navbar}>
      <ul className={navlinks}>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
      <Button link="/resume.pdf">Resume</Button>
    </nav>
  )
}

export default Navbar
