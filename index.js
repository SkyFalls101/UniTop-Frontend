import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' here
import App from './App';
// import './index.css'; // Uncomment this if you have an index.css file

// 1. Get the root element from your HTML
const rootElement = document.getElementById('root');

// 2. Create the root
const root = ReactDOM.createRoot(rootElement);

// 3. Render your App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);