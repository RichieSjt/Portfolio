import * as React from 'react'
import '../styles/styles.global.scss'

import Layout from '../components/UI/Layout'
import About from '../components/Sections/About'
import Projects from '../components/Sections/Projects'
// import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
