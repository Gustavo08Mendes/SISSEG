'use client'

import { IconButton } from "@mui/joy";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import React from 'react';
import { DarkModeRounded, LightMode } from "@mui/icons-material";


function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
  
    // necessary for server-side rendering
    // because mode is undefined on the server
    React.useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return null;
    }
  
    return (
      <IconButton
        variant="outlined"
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
        sx={{
          border: 'none',
          position: 'absolute',
          right: '40px',
          top: '40px',
        }}
      >

        { mode === 'light' ? 
        <DarkModeRounded color="primary" /> :
        <LightMode color="primary" />}

      </IconButton>
    );
  }

  export default function App() {
    return (
      <CssVarsProvider>
        <ModeToggle />
      </CssVarsProvider>
    );
  }