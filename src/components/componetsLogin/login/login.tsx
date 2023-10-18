'use client'

import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import CardDireito from '../page';
import App from '../../mode/page';

export default function Login() {
    return (

        <Sheet
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100vw",
                transition: '2ms',
                backgroundSize: 'cover',
                backgroundColor: 'neutral.softActiveBg',
                position: 'relative',
            }}
        >
            <App />
            <CardDireito />


        </Sheet>

    );
}