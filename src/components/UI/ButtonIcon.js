import React from 'react'
import { buttonIcon, whiteIcon } from '../../styles/UI/button_icon.module.scss'

import DemoIcon from '../../icons/eye-icon.svg'
import CodeIcon from '../../icons/code-icon.svg'
import FigmaIcon from '../../icons/figma-icon.svg'

const ButtonIcon = props => {
    const { link, children, type } = props

    let icon

    switch (type) {
        case 'demo':
            icon = <DemoIcon className={whiteIcon} />
            break
        case 'code':
            icon = <CodeIcon className={whiteIcon} />
            break
        case 'prototype':
            icon = <FigmaIcon />
            break
        default:
            break
    }

    return (
        <a href={link} className={buttonIcon} target="_blank" rel="noreferrer">
            {children}
            {icon}
        </a>
    )
}

export default ButtonIcon
