import React from 'react'
import './HomepageCard.css'
// import elements from material-ui
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider, useTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles ={
  background: {
    backgroundImage: 'url(https://wallpaperaccess.com/full/446984.jpg)',
    height:'100vh',
  },
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '25%',
  },
  title: {
    fontSize: 14,
  },
  text: {
    padding: '50px',
  },
});

// makes typography mobile responsive
let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

// homepage card
const HomepageCard = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
    <div className="background">
      <Grid 
        className={classes.text}
        item xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Web Developer
            </Typography>
            <Typography variant="h5" component="h2">
              Erika Paige Handley
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              Front and back end web developer, freelance creative inspired by challenge. Recent graduate of University of California Irvine's full stack web development 12-week coding bootcamp.
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              Skilled include: HTML, CSS, Javascript, React, MySql, and Mongo.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
    </ThemeProvider>
  )
}

export default HomepageCard