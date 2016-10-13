import 'babel-polyfill' // generators

import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { render as renderReact } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import { watchForLoadPromoCodes } from './sagas'

import App from './containers/app'
import About from './containers/app'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchForLoadPromoCodes)

renderReact(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App} />
            <Route path="/about" component={About} />
        </Router>
    </Provider>,
    document.getElementById('root')
)

// const state = JSON.parse(localStorage.getItem('state'));
// const store = configureStore(state || {});
//
// let App = require('./components/app').default;
// const render = (Component) => {
//   renderReact(<Component {...store} />, document.getElementById('root'));
// };
//
// if (module.hot) {
//   module.hot.accept('./components/app', function() {
//     let newApp = require('./components/app').default;
//     render(newApp);
//   });
// }
// store.subscribe(() => {
//   render(App);
//   if (process.env.ENV === 'development') {
//     console.log('state', store.getState());
//   }
// });
// store.dispatch(fetchPromoCodes());
