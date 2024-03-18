import { createSlice } from "@reduxjs/toolkit"
import data from "../../data.json"

const initialState = {
    products: [],
    detailProduct: data.productDetails,
    lastCategoryLanded: "",
    decoItemDetails: {},
    decoItemSelected: ""

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
        },
        updateLastCategoryLanded: (state, action) => {
            state.lastCategoryLanded = action.payload
        },
        updateDecoDetails: (state, action) => {
            state.decoItemDetails = action.payload
        },
        updateDecoSelected: (state, action) => {
            state.decoItemSelected = action.payload
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice;