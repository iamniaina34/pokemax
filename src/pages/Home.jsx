import { Box, Typography } from '@mui/material'
import React from 'react'
import { defaultTheme } from '../utilities/themes'
import AppIcon from '../components/AppIcon'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      gap={4}
      m={'auto'}
    >
      <AppIcon
        size='16rem'
        onClick={(e) => {navigate('/pokemon')}}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
      <Typography
        variant='h4'
        fontWeight={500}
        letterSpacing={16}
        textAlign={'center'}
      >
        POKE<span style={{ color: defaultTheme.palette.primary.main }}>MAX</span>
      </Typography>
    </Box>
  )
}

export default Home