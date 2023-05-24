import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: null,
    error: null,
    loading: false
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllRequest: (state) => {
            state.loading = true
        },
        getAllSucess: (state, action) => {
            state.items = action.payload,
                state.loading = false
        },
        getAllFailure: (state, action) => {
            state.error = action.payload,
                state.loading = false
        },
    },
})
const initialStateProduct = {
    item: null,
    error: null,
    loading: false
}
export const productSlice = createSlice({
    name: 'product',
    initialState: initialStateProduct,
    reducers: {
        getRequest: (state) => {
            state.loading = true
        },
        getSuccess: (state, action) => {
            state.item = action.payload.data,
                state.loading = false
        },
        getFailure: (state, action) => {
            state.error = action.payload,
                state.loading = false
        },
    },
})


// Action creators are generated for each case reducer function
export const { getAllRequest, getAllSucess, getAllFailure } = productsSlice.actions
export const { getRequest, getSuccess, getFailure } = productSlice.actions

export default combineReducers({
    list: productsSlice.reducer,
    current: productSlice.reducer,
})

