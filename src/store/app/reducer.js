import { Screens } from './../../constants';
import {
    FETCH_CASHIER_BALANCE,
    FETCH_CASHIER_BALANCE_ERROR,
    FETCH_CASHIER_BALANCE_SUCCESS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_USERS,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
    SHOW_SCREEN
} from './types';

const initialState = {
    screen: Screens.HOME,
    balance: null,
    walletBalance: null,
    products: [],
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SCREEN:
            return {
                ...state,
                screen: action.payload.name
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            };
        case FETCH_CASHIER_BALANCE_SUCCESS:
            return {
                ...state,
                balance: action.payload.amount,
                walletBalance: action.payload.walletAmount
            };
    }

    return state;
};

export default reducer;
