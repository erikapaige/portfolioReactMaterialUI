import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
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
  window.location.href ='https://radiant-woodland-54871.herokuapp.com/'
}
const handleRepoSubmit = (event) => {
  window.location.href = 'https://github.com/ShaneMit/Project2'
}
// portfolio card
const ListivityCard = () => {
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
              Listivity
            </Typography>
            <Typography 
              className={classes.txt}
              variant='subtitle1' 
              color='textSecondary'>
              Primary Technologies:
              <ListItemText> - MySql</ListItemText>
              <ListItemText> - DotEnv</ListItemText>
              <ListItemText> - Express</ListItemText>
            </Typography>
            <Typography 
              className={classes.txt}
              variant='subtitle1' 
              paragraph>
                  Description of project: Listivity is an application that tracks social activity ideas into three categories: Activities, Dining and Entertain. When a user submits their inputs, their data is stored in a MYSQL database and retrieved the next time they log into their account. Each activity can be edited and deleted. Additionally, users are able to click the "shuffle" button. The site will sort through the user's stored data and present them with an activity. 
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
              src='./imgs/ListivitySm.png'
              alt='fitness tracker' /> 
          </CardMedia>
        </Hidden>
      </Card>
    </Grid>
   </ThemeProvider>
  </>
  )
}

export default ListivityCard
