import React from 'react'
import * as styles from '../../styles/UI/button_primary.module.scss'

import { Link } from 'gatsby'

const Button = props => {
  const { link, children } = props

  return (
    <Link to={link} className={styles.buttonPrimary}>
      {children}
    </Link>
  )
}

export default Button
