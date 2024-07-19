import { AppBar, Box, CssBaseline, Divider, Link, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { darkTheme, defaultTheme, lightTheme } from './utilities/themes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import { useState } from 'react'
import AppIcon from './components/AppIcon'
import CustomSwitch from './components/CustomSwitch'


export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(!true)

  const toggleTheme = (e) => {
    setIsDarkTheme(old => !old)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        display={'flex'}
        flexDirection={'column'}
        height={'100vh'}
        overflow={'hidden'}
      >
        <AppBar
          color='transparent'
          position="sticky"
          elevation={0}
        >
          <Toolbar
            disableGutters
            sx={{
              paddingInlineStart: '16px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <Box
              height={'32px'}
              display={'flex'}
              flexDirection={'row'}
              gap={1}
            >
              <Link href='/' underline='none'>
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
              height={'32px'}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'end'}
              gap='4px'
            >
              <CustomSwitch
                value={isDarkTheme}
                onChange={toggleTheme}
              />
            </Box>
          </Toolbar>
          <Divider />
        </AppBar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon' element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}
