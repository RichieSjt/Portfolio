import React from 'react'
import { buttonPrimary, buttonPrimaryLarge } from '../../styles/UI/button_primary.module.scss'

import { Link } from 'gatsby'

const Button = props => {
    const { link, large = false, newTab = false, children } = props
            
    const classes = `${buttonPrimary} ${large ? buttonPrimaryLarge : ''}`
    
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
