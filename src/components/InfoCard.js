import React from 'react'
import { Card, CardHeader, CardContent, Typography, Divider, Icon, Box,Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon } from '@material-ui/core';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';


const temp = '25.78';
const humid = '60';
const weight = '81.2';

export default function InfoCard() {
  return (
    <Card outlined>
      <CardHeader
        title='nazwa ula'
      />
      <Divider/>
      <CardContent>
        <List disablePadding={false}>
                  
            <ListItem>
                <ListItemIcon>
                    <DeviceThermostatIcon/>
                </ListItemIcon>
                <ListItemText primary='Temperatura :'/>
                <ListItemText primary={temp +' °C'}/>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                    <PercentOutlinedIcon/>
                </ListItemIcon>
                <ListItemText>
                    <Typography variant = 'body1' color='primary'>Wilgotność :</Typography>
                </ListItemText>
                <ListItemText>
                    <Typography variant = 'body1' color='primary' align='right'>{humid +' %'}</Typography>
                </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                    <ScaleOutlinedIcon/>
                </ListItemIcon>
                <ListItemText>
                    <Typography variant = 'body1' color='primary'>Waga :</Typography>
                </ListItemText>
                <ListItemText>
                    <Typography variant = 'body1' color='primary' align='right'>{weight +' kg'}</Typography>
                </ListItemText>
            </ListItem>
        </List>
        {/* <Box>
            <Icon fontSize='small'>
                <DeviceThermostatIcon />
                Temperatura : {temp}
            </Icon>
        </Box>
        <Divider/>
        <Box>
            <Icon fontSize='small'>
                <PercentOutlinedIcon />
                Wilgotność :
            </Icon>
            
        </Box>
        <Divider/>
        <Box>
            <Icon fontSize='small'>
                <ScaleOutlinedIcon />
                Waga :
            </Icon>
        </Box> */}
      </CardContent>
        
    </Card>
    
  )
}
