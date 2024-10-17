
import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const commonThemeOptions: ThemeOptions = {
  typography: {
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    // Global style overrides
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'var(--text-primary-color)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--card-background-color)',
          color: 'var(--text-primary-color)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    // Add other component overrides as needed
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a73e8',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
      paper: '#f4f6f8',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
  },
  ...commonThemeOptions,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#29b6f6',
    },
    secondary: {
      main: '#f44336',
    },
    background: {
      default: '#212121',
      paper: '#303030',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  ...commonThemeOptions,
});


