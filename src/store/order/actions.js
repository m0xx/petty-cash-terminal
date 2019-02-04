import {
    CANCEL_SELECT_PRODUCT,
    CANCEL_SELECT_USER,
    CASHIER_CREDIT_PRODUCT, CASHIER_CREDIT_PRODUCT_ERROR, CASHIER_CREDIT_PRODUCT_SUCCESS,
    SELECT_PRODUCT,
    SELECT_USER,
    START_ORDER
} from "./types";

export const startOrder = () => ({
    type: START_ORDER,
    payload: {}
})

export const selectUser = (id) => ({
    type: SELECT_USER,
    payload: {id}
})

export const cancelSelectUser = () => ({
    type: CANCEL_SELECT_USER,
    payload: {}
})

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    payload: {id}
})

export const cancelSelectProduct = () => ({
    type: CANCEL_SELECT_PRODUCT,
    payload: {}
})

export const increaseQuantity = () => ({
    type: CANCEL_SELECT_PRODUCT,
    payload: {}
})

export const cashierCreditProduct = ({productId, userId, quantity}) => ({
  type: CASHIER_CREDIT_PRODUCT,
  payload: {productId, userId, quantity}
})

export const cashierCreditProductSuccess = () => ({
    type: CASHIER_CREDIT_PRODUCT_SUCCESS,
    payload: {}
})

export const cashierCreditProductError = () => ({
    type: CASHIER_CREDIT_PRODUCT_ERROR,
    payload: {}
})
