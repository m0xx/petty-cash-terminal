import {
    FETCH_CASHIER_BALANCE,
    FETCH_CASHIER_BALANCE_ERROR,
    FETCH_CASHIER_BALANCE_SUCCESS, FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS,
    FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, SHOW_SCREEN, START_APP
} from "./types";

/**
 *  Fetch cashier balance
 */
export const fetchCashierBalance = () => {
    return {
        type: FETCH_CASHIER_BALANCE,
        payload: {}
    }
}

export const fetchCashierBalanceSuccess = (payload) => {
    return {
        type: FETCH_CASHIER_BALANCE_SUCCESS,
        payload
    }
}

export const fetchCashierBalanceError = (error) => ({
    type: FETCH_CASHIER_BALANCE_ERROR,
    payload: error
});


/**
 *  Fetch users
 */
export const fetchUsers = () => {
    return {
        type: FETCH_USERS,
        payload: {}
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersError = (error) => ({
    type: FETCH_USERS_ERROR,
    payload: error
});


/**
 *  Fetch products
 */
export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS,
        payload: {}
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: error
});



/**
 *  Show active screen
 */
export const showScreen = (name) => ({
    type: SHOW_SCREEN,
    payload: {
        name
    }
});


/**
 *  Start app
 */
export const startApp = () => ({
    type: START_APP,
    payload: {}
})
