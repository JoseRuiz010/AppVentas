import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../context/authSlice/AuthSlice'
import productReducer from '../context/productSlice/ProductSlice'
import clientReducer from '../context/clientSlice/clientSlice'
import cuentaReducer from '../context/cuentaSlice/CuentaSlice'
import marcaReducer from '../context/marcaSlice/MarcaSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        clients: clientReducer,
        cuentas: cuentaReducer,
        marcas: marcaReducer
    },
})