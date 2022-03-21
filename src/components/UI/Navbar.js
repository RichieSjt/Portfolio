import React from 'react'
import { header, navbar, navlinks, active, menuBtn } from '../../styles/UI/navbar.module.scss'

import { Link, animateScroll as scroll} from 'react-scroll'
import Button from './Button'
import MenuBtn from '../../icons/menu-icon.svg'

const Navbar = () => {
    const offset = -80
    const duration = 600 

    return (
        <header className={header}>
            <nav className={navbar}>
                <input type="checkbox" id="menu-btn" />
                <label htmlFor="menu-btn" className={menuBtn}>
                    <MenuBtn />
                </label>
                <ul className={navlinks}>
                    <li>
                        <Link
                            to="about"
                            activeClass={active}
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={duration}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            activeClass={active}
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={duration}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            activeClass={active}
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={duration}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <Button link="/resume.pdf" newTab={true}>
                    Resume
                </Button>
            </nav>
        </header>
    )
}

export default Navbar
