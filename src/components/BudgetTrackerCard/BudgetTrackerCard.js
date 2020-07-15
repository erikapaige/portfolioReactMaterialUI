import React from 'react'
// import PropTypes from 'prop-types'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import ListItemText from '@material-ui/core/ListItemText'

// formatting for footer
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    backgroundColor: '#111111',
    margin: '25px',
  },
  cardDetails: {
    flex: 1,
  },
  CardMedia: {
    width: 160,
  },
  titleTxt:{
    color: '#F2F3F4',
  },
  txt:{
    color: '#A7AFB2',
  },
  img:{
    height: 'auto',
    marginTop: '5px',
    marginRight: '5px',
  },
  links:{
    color: '#C1C7C9',
    fontWeight:'bold'
  },
}))

// makes typography mobile responsive
let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

// functions for onClick events
const handleAppSubmit = (event) => {
  window.location.href ='https://nameless-mesa-29263.herokuapp.com/'
}
const handleRepoSubmit = (event) => {
  window.location.href = 'https://github.com/erikapaige/progressiveBudget'
}
// portfolio card
const BudgetTracker = () => {
  const classes = useStyles()

  return (
  <>
   <ThemeProvider theme={theme}>
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography 
              className={classes.titleTxt}
              component='h2' 
              variant='h5'>
              Progressive Budget Tracker
            </Typography>
            <Typography 
              className={classes.txt}
              variant='subtitle1' 
              color='textSecondary'>
              Primary Technologies:
              <ListItemText> - (Node) Express</ListItemText>
              <ListItemText> - Mongo </ListItemText>
              <ListItemText> -Node.js </ListItemText>
            </Typography>
            <Typography 
              className={classes.txt}
              variant='subtitle1' 
              paragraph>
                  Description of project: The 'Budget Tracker' allows users to track expenses and deposits. The application is available to users with or without data/internet connection. If a user is offline, their entries are stored and the application is updated once a connection exists. This functionality enables users to track their expenses and receive their most up to date balance regardless of connection. 
            </Typography>
            <Grid
              container
              direction='row'
              justify='space-evenly'
              alignItems='center'>
              <CardActions>
                <Button 
                  size='small'
                  className={classes.links}
                  onClick={handleAppSubmit}>View App
                </Button>
                <Button
                  size='small'
                  className={classes.links}
                  onClick={handleRepoSubmit}>View Repo
                </Button>
              </CardActions>
            </Grid>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia>
            <img
              className={classes.img}
              src='./imgs/BudgetTrackerSm.png'
              alt='fitness tracker' /> 
          </CardMedia>
        </Hidden>
      </Card>
    </Grid>
   </ThemeProvider>
  </>
  )
}

export default BudgetTracker
