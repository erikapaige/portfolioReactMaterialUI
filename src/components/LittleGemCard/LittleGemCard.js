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
  window.location.href ='https://erikapaige.github.io/LittleGems/'
}
const handleRepoSubmit = (event) => {
  window.location.href = 'https://github.com/erikapaige/LittleGems'
}
// portfolio card
const LittleGemCard = () => {
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
              Little Gems
            </Typography>
            <Typography 
              className={classes.txt}
              variant='subtitle1' 
              color='textSecondary'>
              Primary Technologies:
              <ListItemText> - Geolocation API</ListItemText>
              <ListItemText> - Material UI</ListItemText>
              <ListItemText> - Zomato API</ListItemText>
            </Typography>
            <Typography 
              className={classes.txt}
              variant='subtitle1' 
              paragraph>
                  Description of project: Apps like Yelp, Google, Uber Eats, and Door Dash have revolutionized the way we explore restaurants, but many times these apps overlook small local restaurants that may have great ratings but lack reviews. Little Gems shines a spotlight on these places by providing users with recommendations of 4-star rated restaurants (that lack reviews) in their area.
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
              src='./imgs/littleGems.png'
              alt='screenshot of Little Gems App' /> 
          </CardMedia>
        </Hidden>
      </Card>
    </Grid>
   </ThemeProvider>
  </>
  )
}

export default LittleGemCard
