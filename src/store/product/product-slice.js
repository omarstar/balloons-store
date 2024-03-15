import { createSlice } from "@reduxjs/toolkit"
import data from "../../data.json"

const initialState = {
    products: [],
    detailProduct: data.productDetails,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        handleProductSelected: (state, action) => {

            state.detailProduct = {...action.payload}
        },
        recreateProductsList: (state, action)=> {
            state.products = [...action.payload]
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice;