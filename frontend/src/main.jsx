import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming your main App component is in App.js
import './index.css'; // Or your stylesheet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);