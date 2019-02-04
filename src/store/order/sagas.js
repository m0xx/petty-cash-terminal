import {
    call, put, select, take, takeLatest, takeEvery, fork, all
} from 'redux-saga/effects';

import {
    showScreen
} from "./../app/actions";
import {CASHIER_CREDIT_PRODUCT, SELECT_PRODUCT, SELECT_USER, START_ORDER} from "../order/types";
import {Screens} from "../../constants";
import {cashierCreditProduct as apiCashierCreditProduct} from "../../api";
import {cashierCreditProductSuccess, cashierCreditProductError, cashierCreditProduct as cashierCreditProductActions} from "./actions";
import {delay} from "../../utils";


function* showUserScreen() {
    yield put(showScreen(Screens.ORDER_USER));
}

function* showProductScreen() {
    yield put(showScreen(Screens.ORDER_PRODUCT));
}

function* showConfirmationScreen() {
    yield put(showScreen(Screens.ORDER_CONFIRMATION));
}

function* showCompletedScreen() {
    yield put(showScreen(Screens.ORDER_COMPLETED));
}

function* cashierCreditProduct(action) {
    console.log('Cashier credit product', action.payload)
    try {
        yield call(apiCashierCreditProduct, action.payload)
        yield put(cashierCreditProductSuccess())
    }
    catch(err) {
        yield put(cashierCreditProductError())
    }

    yield call(showCompletedScreen)

    yield call(delay(3000));

    yield put(showScreen(Screens.HOME))
}

function* startOrder() {
    yield call(showUserScreen);

    yield takeEvery(SELECT_USER, showProductScreen)
    yield takeEvery(SELECT_PRODUCT, showConfirmationScreen)
}

function* order() {
    yield takeEvery(START_ORDER, startOrder)
    yield takeEvery(CASHIER_CREDIT_PRODUCT, cashierCreditProduct)
}

export default order;