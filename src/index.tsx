import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from 'containers/AppProvider';
import store, { persistor, history } from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { light } from './theme';

ReactDOM.render(
  <AppProvider
    store={store}
    persistor={persistor}
    history={history}
    theme={light}
  >
    <App />
  </AppProvider>,
  document.getElementById('root')
);

// If ;you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
