import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import RSSFeed from './components/RSSFeed';
import KelaIntel from './components/KelaIntel';
import GrafanaDashboard from './components/GrafanaDashboard';
import JiraData from './components/JiraData';
import Messages from './components/Messages';
import './styles/Dashboard.scss';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {/* Header at the top */}
        <Header clientName="ATS" clientLogo="./assets/ATS.jpg" />
        
        {/* RSS Feed directly under the Header */}
        <Box marginY={2}>
          <RSSFeed />
        </Box>

        {/* Two Columns Layout */}
        <Box display="flex" gap={2} marginY={2}>
          {/* Column 1: KELA, Grafana, Jira */}
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <KelaIntel />
            <GrafanaDashboard />
            <JiraData />
          </Box>

          {/* Column 2: Messages */}
          <Box flex={1}>
            <Messages />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;

