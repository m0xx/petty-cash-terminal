import { createStore as _createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import saga from './store/sagas';

import reducer from './store/reducer';
import logger from 'redux-logger'

export default function createStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = window.__store = _createStore(reducer, applyMiddleware(logger, sagaMiddleware));

    sagaMiddleware.run(saga);

    return store;
};