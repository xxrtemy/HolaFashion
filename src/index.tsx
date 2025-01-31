import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this is correct
import App from './App';

import './global_styles/reset.css';
import './global_styles/style.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found in the DOM.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
