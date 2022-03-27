import React from 'react';
import ReactDOM from 'react-dom';
import App from './root/App/App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.min.css';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

