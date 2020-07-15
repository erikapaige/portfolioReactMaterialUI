import React from 'react'
import './HomepageCard.css'
// import elements from material-ui
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

// formatting for background image
const styles ={
  background: {
    backgroundImage: 'url(https://wallpaperaccess.com/full/446984.jpg)',
    height:'75vh',
  },
}

// formatting for card
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '35%',
  },
  title: {
    fontSize: 14,
  },
  text: {
    padding: '50px',
  },
})

// makes typography mobile responsive
let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

// homepage card
const HomepageCard = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
    <div className='background'>
      <Grid 
        className={classes.text}
        item xs={12}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
              Web Developer
            </Typography>
            <Typography variant='h5' component='h2'>
              Erika Paige Handley
            </Typography>
            <br />
            <Typography variant='body2' component='p'>
                Freelance fashion creative looking to implement recently acquired skills in full stack web development to communicate a brand’s story. A 2020 graduate from University of California Irvine's (UCI) 12-week full stack web development bootcamp with technical skills in modern web technologies. Motivated by a challenge I know how to work collaboratively to solve problems to produce quality results that are delivered on time.
            </Typography>
            <br />
            <Typography variant='body2' component='p'>
              Skilled in the following technologies: 
              <br>
              </br>
              HTML, CSS, Javascript, React, MySql, and Mongo.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
    </ThemeProvider>
  )
}

export default HomepageCard