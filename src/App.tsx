import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Box, FormControlLabel, Switch } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { setTheme } from './observables/theme';
import Header from './components/Header';
import RSSFeed from './components/RSSFeed';
import KelaIntel from './components/KelaIntel';
import GrafanaDashboard from './components/GrafanaDashboard';
import JiraData from './components/JiraData';
import Messages from './components/Messages';
import './styles/Dashboard.scss';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    setTheme(isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />}
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
          />
        </Box>

        <Header clientName="ATS" clientLogo="/ATS.jpg" />

        <Box marginY={2}>
          <RSSFeed />
        </Box>

        <Box display="flex" gap={2} marginY={2}>
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <KelaIntel />
            <GrafanaDashboard />
            <JiraData />
          </Box>
          <Box flex={1}>
            <Messages />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;



