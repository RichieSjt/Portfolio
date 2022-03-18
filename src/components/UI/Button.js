import React from 'react'
import { buttonPrimary, buttonLarge} from '../../styles/UI/button_primary.module.scss'

const Button = props => {
  const { link, children, large = false } = props

  const classes = `${buttonPrimary} ${large ? buttonLarge : ''}`

  return (
    <a href={link} target="_blank" rel="noreferrer" className={classes}>
      {children}
    </a>
  )
}

export default Button
