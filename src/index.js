import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import counterReducer from "./products/redux products/reducer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>

  <App />

  </Router>
  </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
