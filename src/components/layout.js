import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <h1>{data.site.siteMetadata?.title || `Title`}</h1>
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
