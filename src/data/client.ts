// src/mockData/clients.ts

import { Client } from '../types/client';

export const clients: Client[] = [
  {
    name: 'ATS',
    logo: '/ATS.jpg',
    themes: {
      light: {
        primary: '#1976d2',
        secondary: '#dc004e',
        background: '#ffffff',
        text: '#000000',
      },
      dark: {
        primary: '#90caf9',
        secondary: '#f48fb1',
        background: '#303030',
        text: '#ffffff',
      },
    },
    grafanaDashboards: [
      { url: 'http://localhost:5000/d-solo/bdpcqrymfg7b4f/ats-wazuh?orgId=1&refresh=30s&from=1729532873804&to=1729576073804&panelId=28', width: '1110px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/adzbhdu3tqwhsc/ats-m?orgId=1&from=1726984682121&to=1729576682121&panelId=7', width: '1110px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/adzbhdu3tqwhsc/ats-m?orgId=1&from=1726984938317&to=1729576938317&panelId=8', width: '1110px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/adzbhdu3tqwhsc/ats-m?orgId=1&from=1726985319818&to=1729577319818&panelId=9', width: '1110px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/bdpcqrymfg7b4f/ats-wazuh?orgId=1&kiosk&refresh=30s&from=1729529546084&to=1729572746084&panelId=17', width: '1110px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/bdpcqrymfg7b4f/ats-wazuh?orgId=1&refresh=30s&from=1729530296236&to=1729573496236&panelId=18', width: '1110px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/bdpcqrymfg7b4f/ats-wazuh?orgId=1&refresh=30s&from=1729530965761&to=1729574165761&panelId=22', width: '458px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/bdpcqrymfg7b4f/ats-wazuh?orgId=1&refresh=30s&from=1729532137757&to=1729575337757&panelId=26', width: '458px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/bdpcqrymfg7b4f/ats-wazuh?orgId=1&refresh=30s&from=1729531398136&to=1729574598136&panelId=23', width: '458px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/bdpcqrymfg7b4f/ats-wazuh?orgId=1&refresh=30s&from=1729531692125&to=1729574892125&panelId=24', width: '551px', height: '258px' },
      { url: 'http://localhost:5000/d-solo/bdpcqrymfg7b4f/ats-wazuh?orgId=1&refresh=30s&from=1729531983699&to=1729575183699&panelId=25', width: '551px', height: '258px' },
      // Add more dashboards as needed with variable sizes
    ],
  },
];
