import React from 'react'
//material-ui elements 
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import Box from '@material-ui/core/Box'

// formatting for footer
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline',
    // flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor:'#000000',
  },
  eph: {
    color: '#777777',
    fontSize: '15px',
  },
  iconRules:{
    marginTop: '5px',
    margin: '10px',
    color: '#999999',
  },
}))

// functions to manage onclick of icons
const handleLinkedInChange = (event) => {
  window.location.href ='https://www.linkedin.com/in/erikapaige/'
}

const handleGitHubChange = (event) => {
  window.location.href ='https://github.com/erikapaige'
}

const handleInstaChange = (event) => {
  window.location.href = 'https://www.instagram.com/erikapaigestyle/'
}

// footer
const AltFooter = () => {
  const classes = useStyles()

  return(
    <footer className={classes.footer}>
      <Box component="div" display="inline">
          <Typography variant="h6" component="h2" gutterBottom className={classes.eph}>
            Erika Paige Handley
          </Typography>
          <LinkedInIcon 
            className={classes.iconRules} 
            onClick={handleLinkedInChange} />
          <GitHubIcon 
            className={classes.iconRules}
            onClick={handleGitHubChange}/>
          <InstagramIcon 
            className={classes.iconRules}
            onClick={handleInstaChange}/>
      </Box>
    </footer>
  )
}

export default AltFooter
