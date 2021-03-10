import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SharedStateProvider } from './store';

ReactDOM.render(
  <React.StrictMode>
    <SharedStateProvider>
      <App />
    </SharedStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
