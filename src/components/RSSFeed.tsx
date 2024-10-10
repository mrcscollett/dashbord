import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './RSSFeed.scss';

const RSSFeed: React.FC = () => {
  const [rssData, setRssData] = useState<any[]>([]);

  useEffect(() => {
    const mockRSS = [
      { title: 'Cybersecurity News 1', link: '#' },
      { title: 'Cybersecurity News 2', link: '#' },
      { title: 'Cybersecurity News 3', link: '#' },
    ];
    setRssData(mockRSS);
  }, []);

  return (
    <Box className="rss-feed" sx={{ backgroundColor: 'background.paper' }}>
      <Typography variant="h6" color="textPrimary">Cybersecurity News</Typography>
      <ul>
        {rssData.map((item, index) => (
          <li key={index}>
            <a href={item.link} style={{ color: '#29b6f6' }}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default RSSFeed;
