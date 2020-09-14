import React from 'react'
import { graphql } from 'gatsby'
import Divider from '@material-ui/core/Divider'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import loadable from '@loadable/component'

import Layout from '../components/layout'
import RouterTabs from '../components/RouterTabs'
import SEO from '../components/seo'
import Bio from '../components/bio'

import 'gitalk/dist/gitalk.css'
import '../style/friend.css'

const useStyles = makeStyles({
  friends: {
    margin: '1rem 0 0 0'
  },
  divider: {
    marginBottom: '1rem'
  },
  introduction: {
    '& img': {
      margin: 'auto'
    }
  },
  comment: {
    marginTop: '1.5rem'
  }
})

const LoadableGitalk = loadable(() => import('gitalk/dist/gitalk-component'))

const FriendPage = (props) => {
  const { data } = props
  const theme = useTheme()
  const classes = useStyles()
  const siteTitle = data.site.siteMetadata.title
  const gitalkConfig = {
    clientID: 'aa68bfff69dfb618b92e',
    clientSecret: 'c446b7ace1dfbfec2f7d618672fd25f1e0164b40',
    repo: 'discreater.github.io',
    owner: 'Discreater',
    admin: 'Discreater',
    id: 'global'
  }
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title='Friends'/>
      <Bio/>
      <RouterTabs
        routers={data.site.siteMetadata.menuLinks}
        currentPage='/friends'
      />
      <Divider className={classes.divider} light={theme.palette.type === 'light'}/>
      <Bio>
        <div className={classes.introduction}>
          <Link underline='none' href='https://github.com/Discreater'>
            <img
              alt='GitHub followers'
              src='https://img.shields.io/github/followers/discreater?label=Follow&style=social'
            />
          </Link>
        </div>
      </Bio>
      <div className={classes.comment}>
        <LoadableGitalk options={gitalkConfig}/>
      </div>
    </Layout>
  )
}

export default FriendPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
        friendship {
          name
          url
          image
        }
      }
    }
    avatars: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
