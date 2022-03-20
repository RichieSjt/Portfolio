import React from 'react'
import * as styles from '../styles/project.module.scss'
import ButtonIcon from './UI/ButtonIcon'

import CardPrimary from './UI/CardPrimary'

const Project = ({ details }) => {
    const { techStack, title, description, refers } = details

    const stack = techStack.map(techName => <p>{techName}</p>)

    const buttons = Object.keys(refers).map(key => {
        const link = refers[key]
        return (
            <ButtonIcon link={link} type={key}>
                {key}
            </ButtonIcon>
        )
    })

    return (
        <div>
            <p className={styles.accent}>Project</p>
            <h3 className={styles.title}>{title}</h3>
            <CardPrimary>
                <div className={styles.projectGrid}>
                    <div>
                        <p>Image</p>
                        <div className={styles.buttonsContainer}>{buttons}</div>
                    </div>
                    <div>
                        {stack}
                        <span className={styles.description}>
                            {description}
                        </span>
                    </div>
                </div>
            </CardPrimary>
        </div>
    )
}

export default Project
