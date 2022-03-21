import React from 'react'
import * as styles from '../styles/projectCard.module.scss'
import ButtonIcon from './UI/ButtonIcon'

import CardPrimary from './UI/CardPrimary'
import Tag from './UI/Tag'

const ProjectCard = ({ content }) => {
    const { frontmatter, html: description } = content
    const { title, techStack, links } = frontmatter

    const tags = techStack.map(techName => <Tag key={techName}>{techName}</Tag>)

    const buttons = links.map(data => {
        const [iconType, link] = data.split(' ')
        return (
            <ButtonIcon link={link} icon={iconType} key={iconType}>
                {iconType}
            </ButtonIcon>
        )
    })

    return (
        <div className={styles.projectCard}>
            <p className={styles.accent}>Project</p>
            <h3 className={styles.title}>{title}</h3>
            <CardPrimary>
                <div className={styles.projectGrid}>
                    <div>
                        <p className={styles.image}>Image</p>
                        <div className={styles.buttonsContainer}>{buttons}</div>
                    </div>
                    <div>
                        <div className={styles.tagsContainer}>{tags}</div>
                        <span
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </div>
                </div>
            </CardPrimary>
        </div>
    )
}

export default ProjectCard
