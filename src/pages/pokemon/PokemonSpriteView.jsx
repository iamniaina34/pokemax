import { Box } from '@mui/material'
import React from 'react'
import ditto from '../../resources/pokemon.json'

function PokemonSpriteView({pokemon = ditto, variant = 'default'}) {
    const width = variant === 'default' ? '' : variant === 'small' ? '24px' : variant === 'big' ? '256px' : '100%'
    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
        >
            <img src={pokemon.sprites.other.showdown.front_default} alt={`${pokemon.name}'s sprite`} style={{
                width: width
            }}
            />
        </Box>
    )
}

export default PokemonSpriteView