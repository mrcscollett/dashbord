// src/components/Header/Header.tsx

import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { ClientContext } from '../contexts/ClientContexts';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const clientContext = useContext(ClientContext);

  if (!clientContext) {
    return null;
  }

  const { clients, selectedClient, setSelectedClient } = clientContext;

  const handleClientChange = (event: SelectChangeEvent<string>) => {
    const selectedClientName = event.target.value;  // No need to cast anymore
    const newClient = clients.find((c) => c.name === selectedClientName);
    if (newClient) {
      setSelectedClient(newClient);
    }
  };

  return (
    <AppBar position="static" sx={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
      <Toolbar sx={{ display: 'flex', width: '100%', padding: '0 !important' }}>
        <img
          src={selectedClient.logo}
          alt={`${selectedClient.name} logo`}
          style={{ height: '40px', marginRight: '16px' }}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {selectedClient.name} Dashboard
        </Typography>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 150, marginRight: '16px' }}>
          <InputLabel id="client-select-label">Client</InputLabel>
          <Select
            labelId="client-select-label"
            value={selectedClient.name}
            onChange={handleClientChange}  // Use the updated handler
            label="Client"
            sx={{ color: 'inherit', '.MuiOutlinedInput-notchedOutline': { borderColor: 'inherit' } }}
          >
            {clients.map((client) => (
              <MenuItem key={client.name} value={client.name}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    style={{ width: '24px', height: '24px', marginRight: '8px' }}
                  />
                  <span>{client.name}</span>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;


