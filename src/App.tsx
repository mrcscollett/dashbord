// src/App.tsx

import React, { useState, useContext } from 'react';
import { ThemeProvider, CssBaseline, Grid } from '@mui/material';
import Header from './components/Header';
import RSSFeed from './components/RSSFeed';
import KELAIntel from './components/KelaIntel';
import GrafanaDashboard from './components/GrafanaDashboard';
import JiraData from './components/JiraData';
import ClientMessages from './components/Messages';
import { ClientContext } from './contexts/ClientContexts';
import { getTheme } from './themes/theme';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const clientContext = useContext(ClientContext);

  if (!clientContext) {
    return <div>Loading...</div>;
  }

  const { selectedClient } = clientContext;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = getTheme(darkMode, selectedClient.themes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Grid container spacing={2} sx={{ padding: '20px' }}>
        <Grid item xs={12} md={6}>
          <RSSFeed />
        </Grid>
        <Grid item xs={12} md={6}>
          <KELAIntel />
        </Grid>
        <Grid item xs={12}>
          <GrafanaDashboard />
        </Grid>
        <Grid item xs={12} md={6}>
          <JiraData />
        </Grid>
        <Grid item xs={12} md={6}>
          <ClientMessages />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;





