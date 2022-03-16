import React from 'react'

import * as styles from '../../styles/UI/button_primary.module.scss'

const Button = props => {
  const { link, children } = props

  return (
    <a href={link} className={styles.buttonPrimary}>
      {children}
    </a>
  )
}

export default Button
