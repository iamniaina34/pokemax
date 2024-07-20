import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PokeApi } from '../../utilities/api'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hadError, setHadError] = useState(false)

  useEffect(() => {
    PokeApi.fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then(r => setPokemonList(r.results))
      .then(r => setIsLoading(false))
      .catch(e => {
        setIsLoading(false)
        setHadError(true)
      })
  }, [])

  return hadError ? (
    <div>An error occured</div>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    <Box
      overflow={'auto'}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'start'}
      justifyContent={'start'}
      gap={1}
      flexWrap={'wrap'}
      sx={{
        scrollbarWidth: 'none'
      }}
    >
      <Grid2
        container
        spacing={2}
        disableEqualOverflow
      >
        {pokemonList?.map((pokemon) => (
          <Grid2 key={pokemon.url} xs={4} sm={3} md={3} xl={2}>
            <Box
              minHeight={128}
              minWidth={128}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'start'}
              alignItems={'center'}
              sx={{
                border: '1px solid',
                borderColor: 'InactiveBorder',
                borderRadius: 2
              }}
            >
              {pokemon.name}
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default Pokemon