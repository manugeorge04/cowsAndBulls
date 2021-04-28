import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Routes from './routes';
import MyProvider from './context/MyProvider';

ReactDOM.render(
  <MyProvider>
    <Routes />
  </MyProvider>
  ,
  document.getElementById('app'),
)