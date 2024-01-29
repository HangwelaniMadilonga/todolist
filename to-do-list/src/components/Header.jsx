import { useState } from 'react'
import './Header.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      
      main: '#595e67',
      
    },
    secondary: {
      
      main: '#f5efe4',
      
    },
  },
});




function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={theme}>
      <AppBar position="static" color='primary' >
        <Toolbar>
        
          <Typography variant="h1" component="div" textAlign={'center'}
           color={'secondary'}
           fontStyle={'italic'} fontWeight={'bold'}
            sx={{ flexGrow: 1 }}>
            To-Do-List
            <AssignmentIcon color='secondary' fontSize='large' 
        sx={{ fontSize: 80, 
        paddingLeft: 6,
        
        }}
        />

          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}

export default Header