import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { projectsSection, projectsContainer } from '../../styles/sections/projects.module.scss'

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
            <h1>Projects</h1>
            <h2>Here are some of the projects I've made.</h2>
            <div className={projectsContainer}>
                {projects}
            </div>
        </section>
    )
}

export default Projects
