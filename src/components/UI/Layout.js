import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'

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
      <p>Site title {data.site.siteMetadata?.title || `Title`}</p>
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
