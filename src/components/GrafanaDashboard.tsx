// src/components/GrafanaDashboard.tsx
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', alerts: 40 },
  { name: 'Feb', alerts: 30 },
  { name: 'Mar', alerts: 20 },
  { name: 'Apr', alerts: 27 },
  { name: 'May', alerts: 18 },
  { name: 'Jun', alerts: 23 },
  { name: 'Jul', alerts: 34 },
];

const GrafanaDashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Wazuh Alerts */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h6">Wazuh Alerts</Typography>
        <Typography color="textSecondary">Number of Alerts: 150</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
            <XAxis dataKey="name" stroke={theme.palette.text.primary} />
            <YAxis stroke={theme.palette.text.primary} />
            <Tooltip />
            <Line type="monotone" dataKey="alerts" stroke={theme.palette.primary.main} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* SentinelOne Alerts */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h6">SentinelOne Alerts</Typography>
        <Typography color="textSecondary">Number of Alerts: 85</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
            <XAxis dataKey="name" stroke={theme.palette.text.primary} />
            <YAxis stroke={theme.palette.text.primary} />
            <Tooltip />
            <Line type="monotone" dataKey="alerts" stroke={theme.palette.secondary.main} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* CIS Benchmark Scores */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h6">CIS Benchmark Scores</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <Box
            sx={{
              flex: 1,
              textAlign: 'center',
              margin: '0 8px',
              backgroundColor: 'background.default',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Windows: 90%
          </Box>
          <Box
            sx={{
              flex: 1,
              textAlign: 'center',
              margin: '0 8px',
              backgroundColor: 'background.default',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Linux: 85%
          </Box>
          <Box
            sx={{
              flex: 1,
              textAlign: 'center',
              margin: '0 8px',
              backgroundColor: 'background.default',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            macOS: 80%
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GrafanaDashboard;

