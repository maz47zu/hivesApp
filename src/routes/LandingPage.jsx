import React from 'react'
import { Grid, Paper, Container, Card } from '@material-ui/core'
import InfoCard from '../components/InfoCard'

const hiveProperties = {
  name: 'Ul numer 36',
  temperature: 'Temperatura',
  humidity: 'Wilgotność',
  weight: 'Waga'
}

export default function LandingPage() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InfoCard props={hiveProperties}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InfoCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InfoCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InfoCard/>
        </Grid>
      </Grid>
    </Container>
  )
}
