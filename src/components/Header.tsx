import React from 'react';
import { Box, Typography } from '@mui/material';
import './Header.scss'


const Header: React.FC<{ clientName: string; clientLogo: string }> = ({ clientName, clientLogo }) => {
  return (
    <Box className="header" sx={{ padding: '16px', backgroundColor: 'primary.main', borderRadius: '8px' }}>
      <img src={"/ATS.jpg"} alt="Client Logo" className="client-logo" />
      <Typography variant="h4" color="textPrimary">
        {clientName}
      </Typography>
    </Box>
  );
};

export default Header;
