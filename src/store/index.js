import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import authSlice from "./auth/auth-slice";
import cartSlice from "./cart/cart-slice";
import productSlice from "./product/product-slice";
import qouteRequestsSlice from "./contact/qoute-slice";
import breadcrumbsSlice from "./breadcrumb/breadcrumbsSlice";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";
import checkOrderSlice from "./contact/checkout-slice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','product','quoterequest']
}
const combinedReducer = combineReducers({
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    breadcrumbs: breadcrumbsSlice.reducer,
    quoterequest: qouteRequestsSlice.reducer,
    checkout: checkOrderSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
    reducer: persistedReducer
    // devTools: process.env.NODE_ENV !== "production",
    // middleware: [thunk]
})

export const persistor = persistStore(store);

// const store = configureStore({
//     reducer: {
//         auth: authSlice.reducer,
//         cart: cartSlice.reducer,
//         product: productSlice.reducer,
//         breadcrumbs: breadcrumbsSlice.reducer
//     }
// })


export default store;

