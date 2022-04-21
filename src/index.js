import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Used for routing or navigating in the app
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/**Browser Router Higher Order Component sending
    routing properties to APP Component */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
