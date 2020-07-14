import React from 'react'
// importing elements from material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'

// formatting for navbar
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000000",
  },
  title: {
    flexGrow: 1,
    textAlign:"left",
    color: "#000000",
  },
  // bar: {
  //   backgroundColor: '#FFFFFF',
  // },
}));

const Navbar = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            className={classes.title}>
            Portfolio
          </Typography>
          <Button color="inherit">
            <HomeIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar