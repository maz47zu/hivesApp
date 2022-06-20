import React from 'react'
import { Card, CardHeader, CardContent, Typography, Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
    } from '@material-ui/core';
import { Button, Box } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import { Link } from 'react-router-dom';
import useStyles from '../customStyles';

export default function InfoCard( props ) {
    const classes = useStyles();
    const hiveId = props.hives?.id;

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
                <Link to='/details' state={{ hiveId: hiveId }} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="info" fullWidth="true" size="small">
                        Więcej informacji...
                    </Button>
                </Link>
            </Box>
        </CardContent>
        </Card>
    )
}
