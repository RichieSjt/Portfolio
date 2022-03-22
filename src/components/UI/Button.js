import React from 'react'
import { buttonPrimary, buttonPrimaryLarge } from '../../styles/UI/button_primary.module.scss'

import { Link } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import scrollConfig from '../config'

const Button = props => {
    const { link, large = false, newTab = false, smoothScroll = false, children } = props
            
    const classes = `${buttonPrimary} ${large ? buttonPrimaryLarge : ''}`

    if(smoothScroll) {
        return (
            <ScrollLink
                className={classes}
                to={link}
                {...scrollConfig}
            >
                {children}
            </ScrollLink>
        )
    }
    
    if(newTab) {
        return (
            <a href={link} className={classes} target="_blank" rel="noreferrer">
                {children}
            </a>
        )
    }
    
    return (
        <Link to={link} className={classes}>
            {children}
        </Link>
    )
}

export default Button
