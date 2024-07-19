import { Box } from '@mui/material';
import React from 'react';

function AppIcon({ size = '2rem', onMouseEnter = () => { }, onMouseLeave = () => { }, onClick = () => { } }) {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <img
                src="/icon.png"
                alt="pokemax"
                style={{
                    width: size,
                    transition: 'transform 0.1s ease-in-out',
                    cursor: 'pointer',
                }}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        </Box>
    );
}

export default AppIcon;
