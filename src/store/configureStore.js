import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );
    store.runSaga = sagaMiddleware.run
    return store
}
