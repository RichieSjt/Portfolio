import React from 'react'
import { aboutSection, intro, description } from '../../styles/sections/about.module.scss'

import Button from '../UI/Button'

const About = () => {
    return (
        <section className={aboutSection} id="about">
            <p className={intro}>Hi there! My name is</p>
            <h1>Ricardo Juárez</h1>
            <h2 className={description}>
                I'm a Software Engineeer with a passion for Web Applications
                development.
            </h2>
            <Button link="projects" large={true} smoothScroll={true}>
                Checkout my Projects!
            </Button>
        </section>
    )
}

export default About
