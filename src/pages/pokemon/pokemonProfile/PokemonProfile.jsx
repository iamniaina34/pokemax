import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PokeApi } from '../../../utilities/api'
import ditto from '../../../resources/pokemon.json'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'
import PokemonSpriteView from '../PokemonSpriteView'

function PokemonProfile() {
    const params = useParams()
    const [pokemon, setPokemon] = useState(ditto)
    const theme = useTheme()
    const isScreenDownMd = useMediaQuery(theme.breakpoints.down('md'))

    useEffect(() => {
        PokeApi.fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then((r) => setPokemon(r))
            .catch((e) => {})
    }, [])

    return (
        <Box
        display={'flex'}
        flexDirection={'column'}
        minHeight={1920}
        sx={{
            border: '1px solid #8888',
            borderRadius: 2
        }}
        >
            <PokemonSpriteView pokemon={pokemon} variant='big'/>
        </Box>
    )
}

export default PokemonProfile