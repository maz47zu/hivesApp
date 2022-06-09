import React from 'react'
import { Card, CardHeader, CardContent, Typography, Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    makeStyles} from '@material-ui/core';
import { Button, Box } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
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

export default function InfoCard( props ) {
    const classes = useStyles();
    //console.log(props.hives);

    return (
        <Card outlined={true} className={classes.paper} >
        <CardHeader title={ 'Numer ula : '+ props.hives?.id }/>

        <Divider/>
        <CardContent>
            <List disablePadding={true}>
                    
                <ListItem>
                    <ListItemIcon className={classes.icon}>
                        <DeviceThermostatIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant = 'body1'>Temperatura :</Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography variant = 'body1' align='right'>{props.hives?.temperature.toFixed(2) +'°C'}</Typography>
                    </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon className={classes.icon}>
                        <PercentOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant = 'body1'>Wilgotność :</Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography variant = 'body1' align='right'>{props.hives?.humidity.toFixed(2) +'%'}</Typography>
                    </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon className={classes.icon}>
                        <ScaleOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant = 'body1' >Waga :</Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography variant = 'body1' align='right'>{props.hives?.weight.toFixed(2) +' kg'}</Typography>
                    </ListItemText>
                </ListItem>
                <Divider/>
                
            </List>
            <Box sx={{pt:1, pb:-0}}>
                    <Button variant="outlined" color="inherit" fullWidth="true" size="small" className={classes.button} >
                        Więcej informacji...
                    </Button>
                </Box>
        </CardContent>
        </Card>
    )
}
