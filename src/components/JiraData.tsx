// src/components/JiraData.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const JiraData: React.FC = () => {
  const mockJiraData = [
    { issue: 'Jira Ticket 1', status: 'Open' },
    { issue: 'Jira Ticket 2', status: 'In Progress' },
  ];

  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        color: 'text.primary',
      }}
    >
      <Typography variant="h6">Jira Tickets</Typography>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {mockJiraData.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <Typography variant="body1">
              <strong style={{ color: 'primary.main' }}>{item.issue}</strong>: {item.status}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default JiraData;

