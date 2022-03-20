import React from 'react'
import * as styles from '../styles/project.module.scss'
import ButtonIcon from './UI/ButtonIcon'

import CardPrimary from './UI/CardPrimary'
import Tag from './UI/Tag'

const ProjectCard = ({ details }) => {
    const { techStack, title, description, refers } = details

    const tags = techStack.map(techName => <Tag>{techName}</Tag>)

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
                        <p className={styles.image}>Image</p>
                        <div className={styles.buttonsContainer}>{buttons}</div>
                    </div>
                    <div>
                        <div className={styles.tagsContainer}>
                            {tags}
                        </div>
                        <span className={styles.description}>
                            {description}
                        </span>
                    </div>
                </div>
            </CardPrimary>
        </div>
    )
}

export default ProjectCard
