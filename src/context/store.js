import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../context/authSlice/AuthSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})