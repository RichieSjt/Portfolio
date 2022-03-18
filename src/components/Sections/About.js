import React from 'react'

import { aboutContainer, intro, description } from '../../styles/sections/about.module.scss'
import Button from '../UI/Button'

const About = () => {
    return (
      <section className={aboutContainer} id='about'>
        <p className={intro}>Hi there! My name is</p>
        <h1>Ricardo Juárez</h1>
        <h2 className={description}>
          I'm a Software Engineeer who specializes in web applications
          development.
        </h2>
        <Button link='/#projects' large={true}>Checkout my Projects!</Button>
      </section>
    )
}

export default About