import {
    call, put, select, take, takeLatest, takeEvery, fork, all
} from 'redux-saga/effects';

import {CASHIER_CREDIT_PRODUCT, FETCH_USERS, FETCH_USERS_SUCCESS, START_APP, START_ORDER} from "./types";
import {PAGE_REFRESH_TIMEOUT} from "./../../constants";
import * as api from "./../../api";
import {
    fetchCashierBalanceError,
    fetchCashierBalanceSuccess,
    fetchProductsError,
    fetchProductsSuccess,
    fetchUsersError,
    fetchUsersSuccess
} from "./actions";
import {CASHIER_CREDIT_PRODUCT_SUCCESS} from "../order/types";

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
        const result = yield call(api.getCashierBalance);

        yield put(fetchCashierBalanceSuccess(result))
    }
    catch(err) {
        console.log('ooops', err)
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

function refreshPage() {
    window.location.reload();
}

let timer;
function* setTimer() {
    while(true) {
        // set timer
        timer = setTimeout(refreshPage, PAGE_REFRESH_TIMEOUT)

        // wait any dispatched action
        yield take('*');

        // reset timer
        clearTimeout(timer)
    }
}

function* app() {
    yield takeLatest(START_APP, fetchAll);
    yield takeLatest(CASHIER_CREDIT_PRODUCT_SUCCESS, fetchCashierBalance);
    yield fork(setTimer)
}

export default app;