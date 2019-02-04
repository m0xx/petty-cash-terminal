import {
    call, put, select, take, takeLatest, takeEvery, fork, all
} from 'redux-saga/effects';
import app from './app/sagas';
import order from './order/sagas';

function* root() {
    yield all([
        app(),
        order()
    ])
}

export default root;