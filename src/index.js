import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './global_styles/reset.css';
import './global_styles/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


