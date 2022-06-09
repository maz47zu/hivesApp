import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card, CardHeader, CardContent, Typography, Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    makeStyles
} from '@material-ui/core';
import { yellow } from '@mui/material/colors';

const useStyles = makeStyles({
    root: {
      background: yellow[600],
      border: 0,
      borderRadius: 3,
      //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'grey',
      height: 48,
      padding: '0 30px',
    },
    icon:{
      color: 'black'
    },
    paper: {
        background: '#ffc107',
        color: 'black'
    },
    button: {
        color: 'black'
    }
  });

export default function HiveDetails() {
    const location = useLocation();
    const { hiveId } = location.state;
    const classes = useStyles();

    //http://51.68.141.235:8088/history/hive/10

  return (
    <Card outlined={true} className={classes.paper} >
    <CardHeader title={ 'Szczegóły ula numer: '+ hiveId }/>

    <Divider/>
    <CardContent>
        
    </CardContent>
    </Card>
  )
}
