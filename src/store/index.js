import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import cartSlice from "./cart/cart-slice";
import productSlice from "./product/product-slice";
import breadcrumbsSlice from "./breadcrumb/breadcrumbsSlice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        product: productSlice.reducer,
        breadcrumb: breadcrumbsSlice.reducer
    }
})


export default store;

