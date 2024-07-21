import { Box } from '@mui/material';
import React from 'react';
import Icon from '../utilities/iconResolver';

function AppIcon({ size = '2rem', onMouseEnter = () => { }, onMouseLeave = () => { }, onClick = () => { } }) {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <img
                src={Icon.app}
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
