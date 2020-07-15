import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import PortfolioCard from '../../components/PortfolioCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  border: {
    marginTop: '15px',
  },
  card: {
    marginLeft: '10px',
    marginRight: '10px',
  },
}))

const Portfolio = () => {
  const classes = useStyles()
  
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <PortfolioCard />
        <PortfolioCard />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <PortfolioCard />
        <PortfolioCard />
      </Grid>
    </Grid>
  )
}

export default Portfolio