import React, { useState } from 'react'
import { header, navbar, navlinks, active, menuBtn } from '../../styles/UI/navbar.module.scss'

import { Link, Events } from 'react-scroll'
import Button from './Button'
import MenuBtn from '../../icons/menu-icon.svg'

const Navbar = () => {
    // Creating a scroll state to prevent adding active classes to nav links when scrolling
    const [scrollState, setScrollState] = useState({
        scrolling: false,
        to: ''
    })

    Events.scrollEvent.register('begin', (to, element) => {
        setScrollState({
            scrolling: true,
            to,
        })
    })

    Events.scrollEvent.register('end', (to, element) => {
        // Waiting for scroll to completely finish
        setTimeout(()=> {
            setScrollState({
                scrolling: false,
                to: '',
            })
        }, 50)
    })

    // Setting active class only when we are not scrolling
    const activeClassCurrent = !scrollState.scrolling ? active : '';

    // React scroll config
    const scrollConfig = {
        activeClass: activeClassCurrent,
        spy: true,
        smooth: true,
        offset: -75,
        duration: 600,
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
                            to="about"
                            // Setting active class only if it is the item we are currently scrolling to
                            className={scrollState.to === 'about' ? active : ''}
                            {...scrollConfig}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            className={scrollState.to === 'projects' ? active : ''}
                            {...scrollConfig}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            className={scrollState.to === 'contact' ? active : ''}
                            {...scrollConfig}
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
