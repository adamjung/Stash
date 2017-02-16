import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import configureStore from './store/configureStore.js';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('app')
  );
}

store.subscribe(render);
render();