import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global styles
import App from './App';  // Your main App component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: To measure performance (you can ignore this if not needed)
reportWebVitals();