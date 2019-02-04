import {START_ORDER} from "./types";

const initialState = {
    userId: null,
    selectedProductIds: [],
    productQtyById: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_ORDER:
            return {
                ...initialState,
            };
    }

    return state;
};

export default reducer;
