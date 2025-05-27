import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import external CSS
import 'w3-css/w3.css';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/swiper-bundle.min.css';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();