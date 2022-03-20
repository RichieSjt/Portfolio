import React from 'react'
import { projectsSection } from '../../styles/sections/projects.module.scss'

import ProjectCard from '../ProjectCard'

const Projects = () => {
    const filmateDetails = {
        title: 'Filmate Web App',
        description:
            'Create and share movie playlists with your friends, want to see a movie?  With filmate you can both select films and make a match!',
        techStack: ['React', 'Express', 'Node', 'MongoDB', 'SASS', 'UI/UX'],
        refers: {
            demo: 'https://filmate-web.herokuapp.com/login',
            code: 'https://github.com/RichieSjt/Filmate',
            prototype:
                'https://www.figma.com/file/oh7pkoh99zmrOXgWNoocxE/Portfolio?node-id=64%3A178',
        },
    }
    const portfolioDetails = {
        title: 'Personal Portfolio',
        description:
            'My personal website where I show about me, my projects and resume. Built and designed from scratch.',
        techStack: ['Gatsby', 'React', 'SASS', 'UI/UX'],
        refers: {
            code: 'codelink.com',
            prototype: 'prototypelink.com',
        },
    }

    return (
        <section className={projectsSection} id="projects">
            <ProjectCard details={filmateDetails} />
            <ProjectCard details={portfolioDetails} />
        </section>
    )
}

export default Projects
