import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Button } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import { Helmet } from 'react-helmet'
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
    backgroundColor: 'hsla(0, 0%, 0%, 0.6)',
    color: 'white',
    textShadow: '1px 1px 1px black',
    boxShadow: '0 0 6px hsla(0, 0%, 0%, 0.5)',
    borderRadius: '30px',
    margin: theme.spacing(0, 2),
    padding: theme.spacing(3, 0)
  },
  heroText: {
    margin: theme.spacing(1, 3),
    textAlign: 'center',
  },
  heroButton: {
    margin: '0 auto',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
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
      <Helmet>
        <title>First Choice Pest Control</title>
        <meta name="description" content="Commercial and Residential Pest Control" />
      </Helmet>
      <BackgroundImage className={classes.hero} fluid={waspFluid}>
        <div className={classes.heroTextContainer}>
          <h1 className={classes.heroText}>Commercial and Residential Pest Control</h1>
          <div className={classes.buttonContainer}>
            <Button
              variant='contained'
              color='primary'
              startIcon={<PhoneIcon />}
              className={classes.heroButton}
            >
              {'Call Now for a FREE Quote!'}
            </Button>
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

export default Index