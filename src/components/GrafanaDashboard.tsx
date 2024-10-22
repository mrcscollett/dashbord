// src/components/GrafanaDashboard/GrafanaDashboard.tsx

import React, { useContext } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { ClientContext } from '../contexts/ClientContexts';

const GrafanaDashboard: React.FC = () => {
  const clientContext = useContext(ClientContext);

  if (!clientContext) {
    return null;
  }

  const { selectedClient } = clientContext;

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Grafana Dashboards
      </Typography>
      <Grid container spacing={2}>
        {selectedClient.grafanaDashboards.map((dashboard, index) => (
          <Grid
            item
            xs={12}  // Full width on extra-small screens
            sm={6}   // Two iframes per row on small screens
            md={4}   // Three iframes per row on medium screens
            lg={3}   // Four iframes per row on large screens
            key={index}
          >
            <iframe
              src={dashboard.url}
              title={`Grafana Dashboard ${index + 1}`}
              width="100%"  // Ensure the iframe takes up the full width of its grid item
              height={dashboard.height}
              frameBorder="0"
              allowFullScreen
              style={{ borderRadius: '8px' }}  // Optional: Add some styling for aesthetics
            ></iframe>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default GrafanaDashboard;




