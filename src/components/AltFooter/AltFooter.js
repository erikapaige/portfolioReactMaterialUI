import React from 'react'
//material-ui elements 
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'

// formatting for footer
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // flexGrow: 1,
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor:'#000000',
  },
  eph: {
    marginTop: '5px',
    color: '#999999',
    fontSize: '15px',
    fontWeight:'fontWeightLight',
  },
  iconRules:{
    margin: '5px',
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

  // function for inline row
  const FormRow = () => {
    return (
      <>
        <Grid 
          item xs={4}
          direction='row'
          justify='center'
          alignItems='center'>
          <Typography
          className={classes.eph}>
            Copyright © Erika Paige Handley
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid 
          item xs={4}
          direction='row'
          justify='flex-end'
          alignItems='center'
          >
            <LinkedInIcon
              className={classes.iconRules}
              onClick={handleLinkedInChange} />
            <GitHubIcon
              className={classes.iconRules}
              onClick={handleGitHubChange} />
            <InstagramIcon
              className={classes.iconRules}
              onClick={handleInstaChange} />
        </Grid>
      </>
    )
  }

  return(
    <footer className={classes.footer}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid> 
        </Grid>
      </div> 
    </footer>
  )
}

export default AltFooter
