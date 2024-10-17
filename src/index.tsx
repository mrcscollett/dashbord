// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' import
import App from './App';

const container = document.getElementById('root');

if (container) {
  // Create a root.
  const root = ReactDOM.createRoot(container);

  // Initial render.
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root container missing in index.html");
}

