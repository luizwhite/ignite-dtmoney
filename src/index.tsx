import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import GlobalStyle from './styles/globals';
import ModalStyle from './styles/modal';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ModalStyle />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
