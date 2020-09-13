import React from 'react';
import ReactDOM from 'react-dom';
import '../src/components/styles.css';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);