import * as React from 'react'
import '../styles/styles.global.scss'

import Layout from '../components/UI/Layout'
import About from '../components/Sections/About'
import Projects from '../components/Sections/Projects'
import Contact from '../components/Sections/Contact'
import Seo from '../components/Utils/Seo'

const IndexPage = () => (
    <Layout>
        <Seo title="Home" lang="en" />
        <About />
        <Projects />
        <Contact />
    </Layout>
)

export default IndexPage
