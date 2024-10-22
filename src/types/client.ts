// src/types/client.ts

export interface GrafanaDashboard {
    url: string; // URL of the Grafana dashboard
    width: string; // Width of the iframe (e.g., '100%', '800px', '500px')
    height: string; // Height of the iframe (e.g., '400px', '300px', '600px')
  }
  
  export interface Client {
    name: string; // Client name
    logo: string; // Path to the client logo image
    themes: {
      light: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
      };
      dark: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
      };
    };
    grafanaDashboards: GrafanaDashboard[]; // Array of Grafana dashboard objects with size info
  }
  