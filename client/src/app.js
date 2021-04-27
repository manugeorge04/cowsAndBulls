import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Routes from './routes';

let theme = createMuiTheme({
  typography: {
    fontFamily: "Comfortaa",
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>  
  ,
  document.getElementById('app'),
)