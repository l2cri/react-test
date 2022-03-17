import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import Clock from './Clock';

ReactDOM.render(
  <React.StrictMode>
    <Game />
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);
