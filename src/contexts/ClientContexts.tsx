// src/contexts/ClientContext.tsx

import React, { createContext, useState, ReactNode } from 'react';
import { Client } from '../types/client';
import { clients as mockClients } from '../data/client';

interface ClientContextProps {
  clients: Client[];
  selectedClient: Client;
  setSelectedClient: (client: Client) => void;
}

export const ClientContext = createContext<ClientContextProps | undefined>(undefined);

interface ClientProviderProps {
  children: ReactNode;
}

export const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const [selectedClient, setSelectedClient] = useState<Client>(mockClients[0]);

  return (
    <ClientContext.Provider value={{ clients: mockClients, selectedClient, setSelectedClient }}>
      {children}
    </ClientContext.Provider>
  );
};
