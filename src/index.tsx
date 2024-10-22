// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ClientProvider } from './contexts/ClientContexts';
//import './index.scss'; // Optional: Global styles if any

ReactDOM.render(
  <React.StrictMode>
    <ClientProvider>
      <App />
    </ClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



