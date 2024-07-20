import React from 'react'
import ditto from '../../resources/pokemon.json'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { alpha, Box, Typography } from '@mui/material'
import PokemonTypeAvatar from './PokemonTypeAvatar'
import { useTheme } from '@emotion/react'

function PokemonGridComponent({ pokemon = ditto }) {
    const theme = useTheme()
    return (
        <Grid2
            xs={4}
            sm={3}
            md={2}
            lg={2}
            xl={1}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'start'}
                alignItems={'center'}
                bgcolor={alpha(theme.palette[pokemon.types.filter(type => (type.slot === 1)).at(0).type.name].main, 0.1)}
                sx={{
                    border: '1px solid',
                    borderColor: '#88888888',
                    borderRadius: 2
                }}
            >
                <Box
                    width={'100%'}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'end'}
                >
                    {pokemon.types?.map(type => {
                        return (
                            <PokemonTypeAvatar key={type.type.url} type={type} />
                        )
                    })}
                </Box>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s default front sprite`} />
                </Box>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    sx={{
                        borderTop: '1px solid #88888888'
                    }}
                >
                    <Typography
                        variant='caption'
                    >
                        {`${pokemon.name}`}
                    </Typography>
                </Box>
            </Box>
        </Grid2>
    )
}

export default PokemonGridComponent