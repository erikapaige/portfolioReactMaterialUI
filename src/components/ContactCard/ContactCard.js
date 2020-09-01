import React from 'react'
// import elements from material-ui
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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
            <Typography variant='h5' component='h2'>
              Contact
            </Typography>
            <br />
            <Typography 
            variant='body2' 
            component='p'>
                Email: erika.paige.handley@gmail.com
            </Typography>
            <br />
            <Typography variant='body2' component='p'>
              Phone: 513-646-8965
            </Typography>
            <br />
            <Typography variant='body2' component='p'>
              Resume
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
    </ThemeProvider>
  )
}

export default HomepageCard