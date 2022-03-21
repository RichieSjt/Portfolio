import React from 'react'
import { header, navbar, navlinks, menuBtn } from '../../styles/UI/navbar.module.scss'

import MenuBtn from '../../icons/menu-icon.svg'

import { Link } from 'gatsby'
import Button from './Button'

const Navbar = () => {
    return (
        <header className={header}>
            <nav className={navbar}>
                <input type="checkbox" id="menu-btn" />
                <label htmlFor="menu-btn" class={menuBtn}>
                    <MenuBtn />
                </label>
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
                <Button link="/resume.pdf" newTab={true}>
                    Resume
                </Button>
            </nav>
        </header>
    )
}

export default Navbar
