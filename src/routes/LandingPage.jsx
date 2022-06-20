import React, { useState, useEffect } from 'react'
import { Grid, Container, Typography, Box } from '@material-ui/core'
import InfoCard from '../components/InfoCard'
import { CircularProgress } from '@mui/material';
import useStyles from '../customStyles';


export default function LandingPage() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const classes = useStyles();

  const getHivesData = () => {
    //fetch("/api/hives")
    //console.log('Updating...')
    fetch("http://51.68.141.235:8088/hives")
    //uncomment on localhost 
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        //console.log(items[0].temperature);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  };

  useEffect(function(){
    getHivesData();
    const id = setInterval(getHivesData(),5000);
    return function(){
      clearInterval(id);
    }
    }, [])

    if(error){
      return <div>Error: {error.message}</div>
    }else if(!isLoaded){
      return (
        <Grid container justify = "center" alignItems='center' direction="column">
          <Box component="span" className={classes.box}>
            <CircularProgress size={80}/>
            <Typography>Ładowanie...</Typography>
          </Box>
        </Grid>
      )
    }else{
      return (
        <Container className={classes.container}>
          <Grid container spacing={3}>
          {items.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <InfoCard hives={item}/>
            </Grid>
          ))}
          </Grid>
        </Container>
      )
    }
}
