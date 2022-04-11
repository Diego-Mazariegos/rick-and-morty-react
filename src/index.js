import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from './Context/index';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider >
      <App />
    </Provider>,
  document.getElementById('root')
);
