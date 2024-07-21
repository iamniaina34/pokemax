import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from './utilities/themes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Pokemon from './pages/pokemon/Pokemon'
import { useEffect, useState } from 'react'
import CustomAppbar from './components/CustomAppbar'
import SideNavbar from './components/SideNavbar'

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  })

  const toggleTheme = (e) => {
    setIsDarkTheme(old => !old)
  }

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        display={'flex'}
        flexDirection={'column'}
        height={'100vh'}
        overflow={'hidden'}
      >
        <CustomAppbar switchValue={isDarkTheme} onSwitchChange={toggleTheme} />
        <Box
          flexBasis={'100%'}
          margin={2}
          display={'flex'}
          flexDirection={'row'}
          gap={2}
          overflow={'hidden'}
        >
          <SideNavbar />
          <Box
            flexBasis={'100%'}
            display={'flex'}
            flexDirection={'column'}
            overflow={'auto'}
          >
            <BrowserRouter basename='/pokemax'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pokemon' element={<Pokemon />} />
              </Routes>
            </BrowserRouter>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
