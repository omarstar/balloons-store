import { FETCH_PRODUCTS } from "../actionTypes/types";

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {items: action.payload}
    
        default:
            break;
    }
}