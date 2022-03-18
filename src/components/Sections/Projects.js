import React from 'react'
import { projectsContainer } from '../../styles/sections/projects.module.scss'

import Project from '../Project'

const Projects = () => {
    const filmateDetails = {
        title: 'Filmate Web App',
        description: 'Create and share movie playlists with your friends, want to see a movie?  With filmate you can both select films and make a match!',
        techStack: ['React', 'Express', 'Node', 'MongoDB', 'SASS', 'UI/UX']
    }
    const portfolioDetails = {
      title: 'Personal Portfolio',
      description:
        'My personal website where I show about me, my projects and resume. Built and designed from scratch.',
      techStack: ['Gatsby', 'React', 'SASS', 'UI/UX'],
    }

    return (
        <section className={projectsContainer}>
            <Project details={filmateDetails} />
            <Project details={portfolioDetails} />
        </section>
    )
}

export default Projects