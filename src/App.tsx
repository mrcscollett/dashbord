import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Button, Switch, FormControlLabel } from '@mui/material';
import { lightTheme, darkTheme } from './theme'; // Import both themes
import Header from './components/Header';
import RSSFeed from './components/RSSFeed';
import KelaIntel from './components/KelaIntel';
import GrafanaDashboard from './components/GrafanaDashboard';
import JiraData from './components/JiraData';
import Messages from './components/Messages';
import './styles/Dashboard.scss';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        {/* Theme toggle switch */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={handleThemeChange} />}
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
          />
        </Box>

        {/* Header */}
        <Header clientName="ATS" clientLogo="/ATS.jpg" />

        {/* RSS Feed */}
        <Box marginY={2}>
          <RSSFeed />
        </Box>

        {/* Two Columns Layout */}
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


