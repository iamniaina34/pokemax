import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#FF1A1A',
        },
        secondary: {
            main: '#f7cb15',
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f5f5f5',
        },
        primary: {
            main: '#FF1A1A',
        },
        secondary: {
            main: '#f7cb15',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1a1a1a',
            paper: '#101010',
        },
        primary: {
            main: '#FF1A1A',
        },
        secondary: {
            main: '#f7cb15',
        },
    },
});
