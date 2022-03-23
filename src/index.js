import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import Clock from './Clock';

import ThemeProvider from './providers/ThemeProvider';
import Root from './components/Root';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
    <Game />
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);
