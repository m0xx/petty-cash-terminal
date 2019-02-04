import {FETCH_CASHIER_BALANCE_SUCCESS, FETCH_PRODUCTS_SUCCESS, FETCH_USERS_SUCCESS, Screens, SHOW_SCREEN} from './../../constants';

const initialState = {
    screen: Screens.HOME,
    balance: null,
    products: [],
    users: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SCREEN:
            return {
                ...state,
                screen: action.payload.name
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            }
        case FETCH_CASHIER_BALANCE_SUCCESS:
            return {
                ...state,
                balance: action.payload
            }
    }

    return state;
}


export default reducer;