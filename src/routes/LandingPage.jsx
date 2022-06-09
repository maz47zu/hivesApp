import React, { useState, useEffect } from 'react'
import { Grid, Container } from '@material-ui/core'
import InfoCard from '../components/InfoCard'

export default function LandingPage() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(function(){
    const id = setInterval(function (){
      fetch("/api/hives")
      //console.log('Updating...')
      //fetch("http://51.68.141.235:8088/hives")
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
    },5000);
    return function(){
      clearInterval(id);
    }
    }, [])

    if(error){
      return <div>Error: {error.message}</div>
    }else if(!isLoaded){
      return <div>Loading...</div>
    }else{
      return (
        <Container sx={{ paddingTop: 10 }}>
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
