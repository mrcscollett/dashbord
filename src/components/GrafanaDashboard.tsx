import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './GrafanaDashboard.scss';

// Mock data for line charts
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
  return (
    <Box className="grafana-dashboard">
      {/* Row 1: Wazuh Alerts */}
      <Box className="dashboard-row" sx={{ backgroundColor: 'background.paper', padding: '16px', borderRadius: '8px' }}>
        <Typography variant="h6" color="textPrimary">Wazuh Alerts</Typography>
        <Typography color="textSecondary">Number of Alerts: 150</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="alerts" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Row 2: SentinelOne Alerts */}
      <Box className="dashboard-row" sx={{ backgroundColor: 'background.paper', padding: '16px', borderRadius: '8px' }}>
        <Typography variant="h6" color="textPrimary">SentinelOne Alerts</Typography>
        <Typography color="textSecondary">Number of Alerts: 85</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="alerts" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Row 3: CIS Benchmark Scores */}
      <Box className="dashboard-row" sx={{ backgroundColor: 'background.paper', padding: '16px', borderRadius: '8px' }}>
        <Typography variant="h6" color="textPrimary">CIS Benchmark Scores</Typography>
        <Box className="cis-panels" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ backgroundColor: '#37474f', padding: '8px', borderRadius: '5px' }}>[Windows: 90%]</Box>
          <Box sx={{ backgroundColor: '#37474f', padding: '8px', borderRadius: '5px' }}>[Linux: 85%]</Box>
          <Box sx={{ backgroundColor: '#37474f', padding: '8px', borderRadius: '5px' }}>[macOS: 80%]</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GrafanaDashboard;
