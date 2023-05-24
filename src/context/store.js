import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../context/authSlice/AuthSlice'
import productReducer from '../context/productSlice/ProductSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
    },
})