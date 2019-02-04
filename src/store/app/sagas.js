import {
    call, put, select, take, takeLatest, takeEvery, fork, all
} from 'redux-saga/effects';

import {FETCH_USERS, FETCH_USERS_SUCCESS, START_APP, START_ORDER} from "./types";
import {Screens} from "./../../constants";
import * as api from "./../../api";
import {
    fetchCashierBalanceError,
    fetchCashierBalanceSuccess,
    fetchProductsError,
    fetchProductsSuccess,
    fetchUsersError,
    fetchUsersSuccess,
    showScreen
} from "./actions";

function* fetchUsers() {
    try {
        const users = yield call(api.getUsers);
        yield put(fetchUsersSuccess(users))
    }
    catch(err) {
        yield put(fetchUsersError(err))
    }
}

function* fetchProducts() {
    try {
        const products = yield call(api.getProducts);
        yield put(fetchProductsSuccess(products))
    }
    catch(err) {
        yield put(fetchProductsError(err))
    }
}

function* fetchCashierBalance() {
    try {
        const balance = yield call(api.getCashierBalance);
        yield put(fetchCashierBalanceSuccess(balance))
    }
    catch(err) {
        yield put(fetchCashierBalanceError(err))
    }
}

function* fetchAll() {
    yield all([
        fork(fetchUsers),
        fork(fetchProducts),
        fork(fetchCashierBalance)
    ])
}

function* app() {
    yield takeLatest(START_APP, fetchAll);
}

export default app;