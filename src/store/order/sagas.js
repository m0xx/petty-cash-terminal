import {
    call, put, select, take, takeLatest, takeEvery, fork, all
} from 'redux-saga/effects';

import {
    showScreen
} from "./../app/actions";
import {START_ORDER} from "../order/types";
import {Screens} from "../../constants";

function* startOrder() {
    yield put(showScreen(Screens.ORDER_USER));
}

function* order() {
    yield takeEvery(START_ORDER, startOrder)
}

export default order;