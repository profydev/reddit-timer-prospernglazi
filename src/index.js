import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './styles/global';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
