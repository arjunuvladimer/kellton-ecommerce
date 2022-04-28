import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'


// Used for routing or navigating in the app
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/**Browser Router Higher Order Component sending
    routing properties to APP Component */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
