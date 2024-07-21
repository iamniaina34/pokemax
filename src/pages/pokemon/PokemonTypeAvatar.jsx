import React from 'react'
import ditto from '../../resources/pokemon.json'
import { Avatar, Box, Tooltip } from '@mui/material'
import Icon from '../../utilities/iconResolver'
function PokemonTypeAvatar({ type = ditto.types.at(0) }) {
    return (
        <Tooltip
            title={type.type.name}
            placement='top'
        >
            <Box
                margin={0.5}
            >
                <Avatar
                    variant='square'
                    alt={type.type.name}
                    src={Icon.type[type.type.name]}
                    sx={{
                        width: 16,
                        height: 16,
                        bgcolor: '#0000',
                    }}
                />
            </Box>
        </Tooltip>
    )
}

export default PokemonTypeAvatar