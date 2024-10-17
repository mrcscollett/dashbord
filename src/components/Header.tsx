// src/components/Header.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Header: React.FC<{ clientName: string; clientLogo: string }> = ({ clientName, clientLogo }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: 'primary.main',
        color: 'text.primary',
        borderRadius: '8px',
      }}
    >
      <img src={clientLogo} alt="Client Logo" style={{ height: '50px', marginRight: '16px' }} />
      <Typography variant="h4">{clientName}</Typography>
    </Box>
  );
};

export default Header;
