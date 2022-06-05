import React from 'react'
import { Link } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
//import {isMobile} from 'react-device-detect';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

export default function Header() {
    const themeSize = useTheme();
    const isMobile = useMediaQuery(themeSize.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{backgroundColor: '#121007'}}>
        <CssBaseline />
        <Toolbar>
            <IconButton size='large' edge='start' color='primary' aria-label='logo'>
                <CodeTwoToneIcon color = 'primary'/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}} color='primary'>
                  HivesApp
            </Typography>
            {isMobile ? (
                <ThemeProvider theme={theme}>
                    <DrawerComponent/>
                </ThemeProvider>
            ) : (
                <Stack direction='row' spacing={2}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button><Typography color='primary'>Pasieka</Typography></Button>
                    </Link>
                    <Link to='/settings' style={{ textDecoration: 'none' }}>
                        <Button><Typography color='primary'>Ustawienia</Typography></Button>
                    </Link>
                    <Link to='/about' style={{ textDecoration: 'none' }}>
                        <Button><Typography color='primary'>Twórcy</Typography></Button>
                    </Link>
                </Stack>
            )}
        </Toolbar>
    </AppBar>
  )
}
