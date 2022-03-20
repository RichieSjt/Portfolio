import React from 'react'
import { buttonPrimary, buttonPrimaryLarge } from '../../styles/UI/button_primary.module.scss'

const Button = props => {
    const { link, large = false, children } = props
            
    let classes = `${buttonPrimary} ${large ? buttonPrimaryLarge : ''}`

    return (
        <a href={link} className={classes} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}

export default Button
