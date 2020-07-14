import React from 'react'
// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
// importing elements from material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
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
  iconRules:{
    color: "#000000",
  },
  bar: {
    backgroundColor: '#FFFFFF',
  },
}))

// functions to manage onclick events
const handleHomeIconSubmit = (event) =>{
  window.location = '/'
}
const handleAboutMeSubmit = (event) => {
  window.location='/aboutme'
}
const handlePortfolioSubmit = (event) => {
  window.location = '/portfolio'
}
const handleContactSubmit = (event) => {
  window.location = '/contact'
}

// navbar
const Navbar = () => {
  const classes = useStyles()

  // functions to open menu icon
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu"
          onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleAboutMeSubmit}>
              About Me
            </MenuItem>
            <MenuItem onClick={handlePortfolioSubmit}>
                Portfolio
            </MenuItem>
            <MenuItem onClick={handleClose}>
                Contact
            </MenuItem>
          </Menu>
          <Typography 
            variant="h6" 
            className={classes.title}>
            Portfolio
          </Typography>
          <Button color="inherit">
            <HomeIcon 
             className={classes.iconRules}
             onClick={handleHomeIconSubmit}/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar