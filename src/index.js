import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import {store} from './store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
  // basename='/app'
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
