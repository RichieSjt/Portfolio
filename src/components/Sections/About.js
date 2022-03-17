import React from 'react'

import * as styles from '../../styles/sections/about.module.scss'
import Button from '../UI/Button'

const About = () => {
    return (
      <section className={styles.about} id='about'>
        <p className={styles.intro}>Hi there! My name is</p>
        <h1>Ricardo Juárez</h1>
        <p className={styles.description}>
          I'm a Software Engineeer who specializes in web applications
          development.
        </p>
        <Button link='/#projects'>Checkout my projects!</Button>
      </section>
    )
}

export default About