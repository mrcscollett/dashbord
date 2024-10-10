import React from 'react';
import { Box, Typography } from '@mui/material';
import './JiraData.scss';

const JiraData: React.FC = () => {
  const mockJiraData = [
    { issue: 'Jira Ticket 1', status: 'Open' },
    { issue: 'Jira Ticket 2', status: 'In Progress' },
  ];

  return (
    <Box className="jira-data" sx={{ backgroundColor: 'background.paper' }}>
      <Typography variant="h6" color="textPrimary">Jira Tickets</Typography>
      <ul>
        {mockJiraData.map((item, index) => (
          <li key={index}>
            <strong>{item.issue}</strong>: {item.status}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default JiraData;
