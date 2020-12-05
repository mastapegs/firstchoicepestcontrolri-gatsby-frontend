import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  spacer: {
    height: theme.spacing(9),
  },
  iconButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    fontSize: '1.5em',
    textShadow: '1px 1px 1px black',
  },
}))

const TopBar = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.iconButton} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>{'First Choice Pest Control'}</div>
        </Toolbar>
      </AppBar>
      <div className={classes.spacer} />
    </>
  )
}

export default TopBar