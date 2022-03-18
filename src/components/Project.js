import React from 'react'
import * as styles from '../styles/project.module.scss'

import CardPrimary from './UI/CardPrimary'

const Project = ({ details }) => {
  const { techStack, title, description } = details

  return (
    <div>
      <p className={styles.accent}>Project</p>
      <h3 className={styles.title}>{title}</h3>
      <CardPrimary>
        <div className={styles.projectGrid}>
          <div>
            <p>Image</p>
            <p>Buttons</p>
          </div>
          <div>
            {techStack.map(techName => (
              <p>{techName}</p>
            ))}
            <span>{description}</span>
          </div>
        </div>
      </CardPrimary>
    </div>
  )
}

export default Project
