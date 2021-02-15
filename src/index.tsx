import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './Provider';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
  <Provider>
    <CssBaseline />
    <BrowserRouter>
      <App>
        <Router disableHeaderFooter={false} />
      </App>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
