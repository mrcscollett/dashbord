import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import './Header.scss'


const Header: React.FC<{ clientName: string; clientLogo: string }> = ({ clientName, clientLogo }) => {
    const theme = useTheme();
  return (
    <Box className="header" sx={{ 
        padding: '16px', 
        backgroundColor: theme.palette.primary.main, 
        borderRadius: '8px', 
        display: 'flex', 
        alignItems: 'center' 
      }}>
      <img src={"/ATS.jpg"} alt="Client Logo" className="client-logo" />
      <Typography variant="h4" color="textPrimary">
        {clientName}
      </Typography>
    </Box>
  );
};

export default Header;
