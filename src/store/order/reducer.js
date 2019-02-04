import {
    CANCEL_SELECT_PRODUCT,
    SELECT_PRODUCT,
    CANCEL_SELECT_USER,
    SELECT_USER,
    START_ORDER,
    CASHIER_CREDIT_PRODUCT, CASHIER_CREDIT_PRODUCT_SUCCESS, CASHIER_CREDIT_PRODUCT_ERROR
} from "./types";

const initialState = {
    userId: null,
    productId: null,
    success: false,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_ORDER:
            return {
                ...initialState,
            };
        case SELECT_USER:
            return {
                ...state,
                userId: action.payload.id
            };
        case CANCEL_SELECT_USER:
            return {
                ...state,
                userId: null
            };
        case SELECT_PRODUCT:
            return {
                ...state,
                productId: action.payload.id
            };
        case CANCEL_SELECT_PRODUCT:
            return {
                ...state,
                productId: null
            };
        case CASHIER_CREDIT_PRODUCT:
            return {
                ...state,
                loading: true
            };
        case CASHIER_CREDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false
            };
        case CASHIER_CREDIT_PRODUCT_ERROR:
            return {
                ...state,
                success: false,
                loading: false
            };
    }

    return state;
};

export default reducer;
