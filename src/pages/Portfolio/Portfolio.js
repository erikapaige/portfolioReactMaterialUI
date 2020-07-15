import React from 'react'
// material-ui elements
import Grid from '@material-ui/core/Grid'
// components
import PortfolioCard from '../../components/PortfolioCard'
import BurgerBuzzCard from '../../components/BurgerBuzzCard'
import ProgressiveBudgetCard from '../../components/ProgressiveBudgetCard'
import ListivityCard from '../../components/ListivityCard'
import DeweyCard from '../../components/DeweyCard'
import LittleGemCard from '../../components/LittleGemCard'


const Portfolio = () => {
  
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <DeweyCard />
        <ListivityCard />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <PortfolioCard />
        <ProgressiveBudgetCard />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <BurgerBuzzCard />
        <LittleGemCard />
      </Grid>
    </Grid>
  )
}

export default Portfolio