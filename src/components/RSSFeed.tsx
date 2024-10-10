import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import './RSSFeed.scss';

const RSSFeed: React.FC = () => {
  const theme = useTheme(); // Get the current theme
  
  const mockRSS = [
    { title: 'Cybersecurity News 1', link: '#' },
    { title: 'Cybersecurity News 2', link: '#' },
    { title: 'Cybersecurity News 3', link: '#' },
  ];

  return (
    <Box className="rss-feed" sx={{ backgroundColor: theme.palette.background.paper, padding: '16px', borderRadius: '8px' }}>
      <Typography variant="h6" color={theme.palette.text.primary}>Cybersecurity News</Typography>
      <ul>
        {mockRSS.map((item, index) => (
          <li key={index}>
            <a href={item.link} style={{ color: theme.palette.primary.main }}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default RSSFeed;

