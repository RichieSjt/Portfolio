import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
    return (
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume.pdf">Resume</Link>
        </li>
      </ul>
    )
}

export default Navbar