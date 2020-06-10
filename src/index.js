import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reminder from './reducers'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const store = createStore(reminder);

reactDOM.render (
  <Provider store={store} >
   <App />
  </Provider>,
  document.getElementById('root')
)