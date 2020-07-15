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
  window.location.href ='https://tranquil-hollows-63682.herokuapp.com/'
}
const handleRepoSubmit = (event) => {
  window.location.href = 'https://github.com/erikapaige/workoutTracker'
}
// fitness tracker card
const FitnessTrackerCard = () => {
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
              Fitness Tracker
            </Typography>
            <Typography 
              className={classes.txt}
              variant='subtitle1' 
              color='textSecondary'>
              Primary Technologies:
              <ListItemText> - Mongo Database </ListItemText>
              <ListItemText> - Mongoose schema </ListItemText>
              <ListItemText> - Express </ListItemText>
            </Typography>
            <Typography 
              className={classes.txt}
              variant='subtitle1' 
              paragraph>
                  Description of project: The 'Workout Tracker' application allows users to view create and track daily workouts. A user can track the name, type, weight, sets, reps and duration of the exercise. Finally, a user can see all their exercises combined on the 'stats'
            </Typography>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center">
              <CardActions>
                <Button 
                  size="small"
                  className={classes.links}
                  onClick={handleAppSubmit}>View App
                </Button>
                <Button
                  size="small"
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
              src='./imgs/fitnessTrackerSm.png'
              alt='fitness tracker' /> 
          </CardMedia>
        </Hidden>
      </Card>
    </Grid>
   </ThemeProvider>
  </>
  )
}

export default FitnessTrackerCard
