import React from 'react'
import { header, navbar, navlinks, active, menuBtn } from '../../styles/UI/navbar.module.scss'

import MenuBtn from '../../icons/menu-icon.svg'

import { Link } from 'gatsby'
import Button from './Button'

const Navbar = () => {
    // Setting active state based on location hash since gatsby does not match /#something paths by default 
    const isActive = ({ href, location }) => {
        // location.hash is the hash in the link (#something), if it is empy we set it
        // to about so that it applies that link the active class by default
        if (location.hash === '') location.hash = '#about'
        return href.includes(location.hash) ? { className: active } : {}
    }

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
                            to="/#about"
                            // Get props passes the specified function an object containing link properties
                            getProps={isActive}
                            activeClassName={active}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/#projects"
                            getProps={isActive}
                            activeClassName={active}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/#contact"
                            getProps={isActive}
                            activeClassName={active}
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
