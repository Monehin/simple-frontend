import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import './index.css';
import App from './App';
import { SharedStateProvider } from './store';

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <SharedStateProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </SharedStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
