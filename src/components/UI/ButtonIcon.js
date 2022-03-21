import React from 'react'
import { buttonIcon, whiteIcon } from '../../styles/UI/button_icon.module.scss'

import DemoIcon from '../../icons/eye-icon.svg'
import CodeIcon from '../../icons/code-icon.svg'
import FigmaIcon from '../../icons/figma-icon.svg'

const ButtonIcon = props => {
    const { link, children, icon } = props

    let selectedIcon

    switch (icon) {
        case 'demo':
            selectedIcon = <DemoIcon className={whiteIcon} />
            break
        case 'code':
            selectedIcon = <CodeIcon className={whiteIcon} />
            break
        case 'prototype':
            selectedIcon = <FigmaIcon />
            break
        default:
            break
    }

    return (
        <a href={link} className={buttonIcon} target="_blank" rel="noreferrer">
            {children}
            {selectedIcon}
        </a>
    )
}

export default ButtonIcon
