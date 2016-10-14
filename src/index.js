import 'babel-polyfill' // generators
import React from 'react'
import { Router, hashHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import { watchForLoadPromoCodes } from './sagas'

const store = configureStore()
store.runSaga(watchForLoadPromoCodes)

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
