import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  hero: {
    height: '400px',
    width: '100%',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
  },
  heroTextContainer: {
    backgroundColor: 'hsla(0, 0%, 0%, 0.3)',
    color: 'white',
    textShadow: '1px 1px 1px black',
    borderRadius: '30px',
    margin: theme.spacing(0, 2),
  },
  heroText: {
    margin: theme.spacing(1, 3),
    textAlign: 'center',
  },
}))

const query = graphql`
{
  file(relativePath: {eq: "wasp-hero.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Index = () => {
  const classes = useStyles()
  const { file: { childImageSharp: { fluid: waspFluid } } } = useStaticQuery(query)
  return (
    <>
      <BackgroundImage className={classes.hero} fluid={waspFluid}>
        <div className={classes.heroTextContainer}>
          <h1 className={classes.heroText}>Commercial and Residential Pest Control</h1>
        </div>
      </BackgroundImage>
    </>
  )
}

export default Index