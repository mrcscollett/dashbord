import React from 'react';
import { Box, Typography } from '@mui/material';
import './KelaIntel.scss';

const KelaIntel: React.FC = () => {
  const mockIntel = [
    { report: 'Intel Report 1', details: 'Details about Intel 1' },
    { report: 'Intel Report 2', details: 'Details about Intel 2' },
  ];

  return (
    <Box className="kela-intel" sx={{ backgroundColor: 'background.paper' }}>
      <Typography variant="h6" color="textPrimary">KELA Intel</Typography>
      <ul>
        {mockIntel.map((item, index) => (
          <li key={index}>
            <strong>{item.report}</strong>: {item.details}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default KelaIntel;
