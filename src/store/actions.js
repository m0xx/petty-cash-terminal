import {
    FETCH_CASHIER_BALANCE,
    FETCH_CASHIER_BALANCE_SUCCESS,
    FETCH_CASHIER_BALANCE_ERROR,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    SHOW_SCREEN,
    START_ORDER,
    START_APP
} from "./../constants";

/**
 *  Fetch cashier balance
 */
export const fetchCashierBalance = () => {
    return {
        type: FETCH_CASHIER_BALANCE,
        payload: {}
    }
}

export const fetchCashierBalanceSuccess = (balance) => {
    return {
        type: FETCH_CASHIER_BALANCE_SUCCESS,
        payload: balance
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

/**
 *  Start an order flow
 */
export const startOrder = () => ({
    type: START_ORDER,
    payload: {}
})

