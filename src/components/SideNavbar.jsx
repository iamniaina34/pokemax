import { useTheme } from '@emotion/react'
import { Box, Paper, useMediaQuery } from '@mui/material'
import React from 'react'

function SideNavbar() {
  const theme = useTheme()
  const isScreenDownMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box
    elevation={1}
    bgcolor={theme.palette.background.default}
    display={isScreenDownMd ? 'none' : 'flex'}
    height={'100%'}
    minWidth={96}
    sx={{
      border: '1px solid',
      borderColor: 'InactiveBorder',
      borderRadius: 2,
    }}
    >

    </Box>
  )
}

export default SideNavbar