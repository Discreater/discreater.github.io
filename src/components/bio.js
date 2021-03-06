/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

const Bio = ({ children }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/mio5.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          siteUrl
          social {
            github
          }
        }
      }
    }
  `)

  const { author, siteUrl, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: '100%'
        }}
        imgStyle={{
          borderRadius: '50%'
        }}
      />
      {children ||
      <p>
        Written by <strong>{author}</strong> who lives in China
        building useless things.
        {' '}
        <br/>
        <span>You can follow him on </span>
        <a target='_blank' rel='noopener noreferrer'
          href={`https://github.com/${social.github}`}>
          Github
        </a>
        <span> Or by </span>
        <a target='_blank' rel='noopener noreferrer'
          href={`${siteUrl}/rss.xml`}>
          RSS
        </a>
      </p>}
    </div>
  )
}

export default Bio
