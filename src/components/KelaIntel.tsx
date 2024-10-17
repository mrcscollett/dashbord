// src/components/KelaIntel.tsx
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const KelaIntel: React.FC = () => {
  const mockIntel = [
    { report: 'Intel Report 1', details: 'Details about Intel 1' },
    { report: 'Intel Report 2', details: 'Details about Intel 2' },
  ];

  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        color: 'text.primary',
      }}
    >
      <Typography variant="h6">KELA Intel</Typography>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {mockIntel.map((item, index) => (
          <li key={index} style={{ marginBottom: '12px' }}>
            <Typography variant="body1">
              <strong style={{ color: theme.palette.primary.main }}>{item.report}</strong>: {item.details}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default KelaIntel;

