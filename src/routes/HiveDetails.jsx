import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardContent, Container,  IconButton, Box } from '@material-ui/core';
import useStyles from '../customStyles';
import CottageIcon from '@mui/icons-material/Cottage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HiveChart from '../components/HiveChart';

export default function HiveDetails() {
    const location = useLocation();
    const { hiveId } = location.state;
    const classes = useStyles();
    const navigate = useNavigate();
    //http://51.68.141.235:8088/history/hive/10

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
