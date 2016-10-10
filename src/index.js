import 'babel-polyfill'; // generators
import React from 'react';
import { render as renderReact } from 'react-dom';
import configureStore from './store/configureStore';
import { fetchPromoCodes } from './sagas'

const state = JSON.parse(localStorage.getItem('state'));
const store = configureStore(state || {});

let App = require('./components/app').default;
const render = (Component) => {
  renderReact(<Component {...store} />, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./components/app', function() {
    let newApp = require('./components/app').default;
    render(newApp);
  });
}
store.subscribe(() => {
  render(App);
  if (process.env.ENV === 'development') {
    console.log('state', store.getState());
  }
});
store.dispatch(fetchPromoCodes());
