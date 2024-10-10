import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a73e8', // Light mode primary color
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff', // Light background color
      paper: '#f4f6f8',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#29b6f6', // Dark mode primary color
    },
    secondary: {
      main: '#f44336',
    },
    background: {
      default: '#212121', // Dark background color
      paper: '#303030',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

