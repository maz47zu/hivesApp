import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import InfoIcon from '@mui/icons-material/Info';
import ListItemIcon from '@mui/material/ListItemIcon';
import CottageIcon from '@mui/icons-material/Cottage';
import { yellow, orange } from '@mui/material/colors';

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
  link:{
      textDecoration:"none",
      color: "blue",
      fontSize: "20px",
  },
  paper: {
      background: yellow[700],
      width: '50%'
  }
});

export default function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  return (
    <div>
        <Drawer
              variant={'temporary'}
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              anchor={"right"}
              classes={{ paper: classes.paper }}
          >
              
              <List disablePadding={false}>
                  
                  <Link to='/' style={{ textDecoration: 'none' }}>
                      <ListItem onClick={() => setOpenDrawer(false)} button className={classes.root}>
                          <ListItemIcon>
                              <CottageIcon  className={classes.icon}/>
                          </ListItemIcon>
                          <ListItemText primary='Pasieka'/>

                      </ListItem>
                  </Link>
                  <Divider/>
                  <Link to='/settings' style={{ textDecoration: 'none' }}>
                      <ListItem onClick={() => setOpenDrawer(false)} button className={classes.root}>
                              <ListItemIcon>
                                  <InfoIcon  className={classes.icon}/>
                              </ListItemIcon>
                              <ListItemText primary='Ustawienia'/>
                      </ListItem>
                  </Link>
                  {/* <Divider />
                  <Link to='/policy' style={{ textDecoration: 'none' }}>
                      <ListItem onClick={() => setOpenDrawer(false)}>
                          <ListItemButton className="button-sidebar">
                              <ListItemIcon>
                                  <PolicyIcon />
                              </ListItemIcon> 
                              Policy
                          </ListItemButton>
                      </ListItem>
                  </Link>
                  <Divider />
                  <Link to='/contact' style={{ textDecoration: 'none' }}>
                      <ListItem onClick={() => setOpenDrawer(false)}>
                          <ListItemButton className="button-sidebar"> 
                              <ListItemIcon>
                                  <ContactPageIcon/>
                              </ListItemIcon>
                              Contact
                          </ListItemButton>
                      </ListItem>
                  </Link>
                  <Divider />
                  <Link to='/firstLesson' style={{ textDecoration: 'none' }}>
                      <ListItem onClick={() => setOpenDrawer(false)}>
                          <ListItemButton className="button-sidebar"> 
                              <ListItemIcon>
                                  <NightShelterIcon/>
                              </ListItemIcon>
                              Lesson1
                          </ListItemButton>
                      </ListItem>
                  </Link> */}
              </List>
          </Drawer>
          
          <IconButton  onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuOpenIcon color="primary"/>
          </IconButton>
    </div>
  )
}