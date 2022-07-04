import React  , { useState, useEffect }from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardContent, Container,  IconButton, Box, Grid, Typography } from '@material-ui/core';
import useStyles from '../customStyles';
import CottageIcon from '@mui/icons-material/Cottage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HiveChart from '../components/HiveChart';
import { CircularProgress } from '@mui/material';

export default function HiveDetails() {
    const location = useLocation();
    const { hiveId } = location.state;
    const classes = useStyles();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getHiveData = () => {
      const url = "http://51.68.141.235:8088/history/hive/" + hiveId;
      console.log(url);
      //fetch("/api/hives")
      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(items.length);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    };

    useEffect(function(){
      getHiveData();
      const id = setInterval(getHiveData(),1000);
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
            <Card outlined={true} >
            <CardHeader title={'Szczegóły ula numer: '+ hiveId} disableTypography={true} 
            action={<Box>
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIcon className={classes.icon}/>
                <CottageIcon className={classes.icon}/>
              </IconButton>
            </Box>}
            className={classes.paper}
            />
            <CardContent className={classes.chart}>
                <HiveChart id={ hiveId }/>
            </CardContent>
            </Card>
          </Container>
        )
      }
}
