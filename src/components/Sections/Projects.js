import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { projectsSection } from '../../styles/sections/projects.module.scss'

import ProjectCard from '../ProjectCard'

const Projects = () => {
    const data = useStaticQuery(graphql`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title
                        techStack
                        links
                    }
                    html
                }
            }
        }
    `)

    const projectsNode = data.allMarkdownRemark.nodes

    const projects = projectsNode.map(project => (
        <ProjectCard content={project} />
    ))

    return (
        <section className={projectsSection} id="projects">
            {projects}
        </section>
    )
}

export default Projects
