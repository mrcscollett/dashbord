import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#1a73e8' },
      text: {
        primary: '#000000',
        secondary: '#333333',
      },
    },
    typography: {
      h6: {
        fontWeight: 600,
      },
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#29b6f6' },
      text: {
        primary: '#ffffff',
        secondary: '#b0bec5',
      },
    },
    typography: {
      h6: {
        fontWeight: 600,
      },
    },
  });
  

