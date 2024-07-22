import React from 'react'
import ditto from '../../resources/pokemon.json'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { alpha, Box, Typography } from '@mui/material'
import PokemonTypeAvatar from './PokemonTypeAvatar'
import { useTheme } from '@emotion/react'
import PokemonSpriteView from './PokemonSpriteView'
import { useNavigate } from 'react-router-dom'

function PokemonGridComponent({ pokemon = ditto }) {
    const navigate = useNavigate()
    const theme = useTheme()

    const handleRedirect = (e) => {
        navigate(`/pokemon/${pokemon.name}`)
    }
    return (
        <Grid2
            xs={4}
            sm={3}
            md={2}
            lg={2}
            xl={1}
        >
            <Box
                minHeight={256}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                alignItems={'center'}
                bgcolor={alpha(theme.palette[pokemon.types.filter(type => (type.slot === 1)).at(0).type.name].main, 0.1)}
                sx={{
                    cursor: 'pointer',
                    transition: 'all',
                    transitionDuration: '25ms',
                    border: '1px solid',
                    borderColor: '#8882',
                    borderRadius: 2
                }}
                onClick={handleRedirect}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${alpha(theme.palette[pokemon.types.filter(type => (type.slot === 1)).at(0).type.name].main, 0.15)}`
                    e.currentTarget.style.borderColor = '#888'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${alpha(theme.palette[pokemon.types.filter(type => (type.slot === 1)).at(0).type.name].main, 0.1)}`
                    e.currentTarget.style.borderColor = '#8882'
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
                <PokemonSpriteView pokemon={pokemon} />
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    sx={{
                        borderTop: '1px solid #8882'
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