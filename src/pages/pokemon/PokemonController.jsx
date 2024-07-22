import { useTheme } from '@emotion/react';
import { Search } from '@mui/icons-material'
import { Box, FormControl, IconButton, InputAdornment, TextField, useMediaQuery } from '@mui/material'
import React, { createRef, useState } from 'react'

function PokemonController() {
    const [showField, setShowField] = useState(false)
    const searchField = createRef()
    const theme = useTheme()

    const handleIconClick = () => {
        searchField.current.focus()
        setShowField(!showField)
    }

    return (
        <Box
            width={'100%'}
            position={'sticky'}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{
                borderColor: '#8888',
                borderRadius: 2
            }}
        >
            <Box>
                Box1
            </Box>
            <Box
                display={'flex'}
                flexDirection={'row'}
                sx={{
                    borderRadius: 2
                }}
            >
                <FormControl>
                    <TextField
                        ref={searchField}
                        focused={showField}
                        size='small'
                        color='secondary'
                        placeholder='ditto...'
                        margin='none'
                        inputProps={{
                            style: {
                                // fontSize: 'small'
                            }
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position={showField ? 'end' : 'start'}>
                                    <IconButton
                                        edge="end"
                                        disableRipple={useMediaQuery(theme.breakpoints.down('md'))}
                                        disableFocusRipple
                                        disableTouchRipple
                                        onClick={handleIconClick}
                                        sx={{
                                            borderRadius: 2
                                        }}
                                    >
                                        <Search fontSize='medium' sx={{ m: 0, p: 0 }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            style: {
                                borderRadius: 8
                            }
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{
                            width: showField ? 168 : 42,
                            '& .MuiInputBase-input': {
                                px: !showField ? 0 : ''
                            }
                        }}
                    />
                </FormControl>
            </Box>
        </Box>
    )
}

export default PokemonController