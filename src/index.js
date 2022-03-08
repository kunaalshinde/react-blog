import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './store/index'
import { Provider } from 'react-redux'
import User from './components/User';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* <User /> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
