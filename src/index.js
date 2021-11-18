import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Rout from './Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/CSS/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
