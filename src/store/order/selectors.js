import {selectProduct} from "../app/selectors";


export const getSelectedUserId = (state) => (state.order.userId)

export const getSelectedProductId = (state) => (state.order.productId)
export const getSelectedProduct = (state) => (selectProduct(state, getSelectedProductId(state)))

export const isOrderSuccess = (state) => (state.order.success);
export const isLoading = (state) => (state.order.loading);