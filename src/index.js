import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './Components/Welcome';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);