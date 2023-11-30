import { createSlice } from "@reduxjs/toolkit"
import data from "../../data.json"

const clonedProducts = [...data.products]
const initialState = {
    products: clonedProducts,
    detailProduct: data.productDetails,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
})

export const productActions = productSlice.actions;
export default productSlice;