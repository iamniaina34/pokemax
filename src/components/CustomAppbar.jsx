import { AppBar, Box, Divider, Link, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AppIcon from './AppIcon'
import CustomSwitch from './CustomSwitch'
import { defaultTheme } from '../utilities/themes'

function CustomAppbar({ switchValue = false, onSwitchChange = () => { } }) {
  const [isChecked, setIsChecked] = useState(switchValue)

  const handelSwitchChange = (event) => {
    const value = event.target.checked
    setIsChecked(value)
    onSwitchChange(event)
  }

  useEffect(() => {
    setIsChecked(switchValue)
  }, [switchValue])

  return (
    <AppBar
      color='transparent'
      position="sticky"
      elevation={0}
    >
      <Toolbar
        disableGutters
        sx={{
          marginInlineStart: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <Box
          height={'48px'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'start'}
          alignItems={'center'}
          gap={1}
        >
          <Link href='/pokemax/' underline='none'>
            <AppIcon />
          </Link>
          <Typography
            variant='h6'
            letterSpacing={4}
            textAlign={'center'}
          >
            POKE<span style={{ color: defaultTheme.palette.primary.main }}>MAX</span>
          </Typography>
        </Box>
        <Box
          height={'48px'}
          display={'flex'}
          flexDirection={'row-reverse'}
          justifyContent={'end'}
          alignItems={'center'}
          gap='4px'
        >
          <CustomSwitch
            value={isChecked}
            onChange={handelSwitchChange}
          />
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default CustomAppbar