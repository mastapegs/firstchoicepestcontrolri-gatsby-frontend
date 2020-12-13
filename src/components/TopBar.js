import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Phone'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  spacer: {
    height: theme.spacing(9),
  },
  iconButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    fontSize: '1.3em',
    textShadow: '1px 1px 1px black',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    flexGrow: 1,
  },
}))

const PHONE_NUMBER = graphql`
  query PhoneNumberQuery {
    site {
      siteMetadata {
        phoneNumber
      }
    }
  }
`

const TopBar = () => {
  const classes = useStyles()
  const { site: { siteMetadata: { phoneNumber } } } = useStaticQuery(PHONE_NUMBER)
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.iconButton} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>{'First Choice Pest Control'}</div>
          <IconButton href={`tel:${phoneNumber}`} color="inherit" aria-label="phone">
            <PhoneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.spacer} />
    </>
  )
}

export default TopBar