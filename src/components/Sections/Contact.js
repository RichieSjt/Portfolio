import React from 'react'
import {contactSection, icons } from '../../styles/sections/contact.module.scss'

import Button from '../UI/Button'
import GithubIcon from '../../icons/github-icon.svg'
import LinkedInIcon from '../../icons/linkedin-icon.svg'

const Contact = () => {
    return (
        <section className={contactSection} id="contact">
            <h1>Get in touch</h1>
            <h2>
                Wether you have a question or just want to say hi I'll get back
                to you as soon as possible.
            </h2>
            <Button link="mailto:richie_j20@outlook.com" large={true}>
                Contact me
            </Button>
            <div className={icons}>
                <GithubIcon />
                <LinkedInIcon />
            </div>
        </section>
    )
}

export default Contact
