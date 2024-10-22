// src/themes/theme.ts

import { createTheme, Theme } from '@mui/material/styles';

export const getTheme = (darkMode: boolean, clientThemes: any): Theme => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? clientThemes.dark.primary : clientThemes.light.primary,
      },
      secondary: {
        main: darkMode ? clientThemes.dark.secondary : clientThemes.light.secondary,
      },
      background: {
        default: darkMode ? clientThemes.dark.background : clientThemes.light.background,
        paper: darkMode ? clientThemes.dark.background : clientThemes.light.background,
      },
      text: {
        primary: darkMode ? clientThemes.dark.text : clientThemes.light.text,
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? clientThemes.dark.primary : clientThemes.light.primary,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      // Add more component overrides as needed
    },
  });
};
