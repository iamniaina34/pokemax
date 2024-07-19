import { Box, List, ListItem, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PokeApi } from '../utilities/api'

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
      overflow={'auto'}>
      <List>
        {pokemonList?.map((pokemon) => (
          <ListItem key={pokemon.url}>
            <ListItemText>{pokemon.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Pokemon