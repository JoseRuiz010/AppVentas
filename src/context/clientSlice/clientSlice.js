import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: null,
    error: null,
    loading: false
}

export const clientsSlice = createSlice({
    name: 'clients',
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
export const clientSlice = createSlice({
    name: 'client',
    initialState: initialStateProduct,
    reducers: {
        getRequest: (state) => {
            state.loading = true
        },
        getSuccess: (state, action) => {
            state.item = action.payload,
                state.loading = false
        },
        getFailure: (state, action) => {
            state.error = action.payload,
                state.loading = false
        },
        saveRequest: (state) => {
            state.loading = true
        },
        saveSuccess: (state) => {
            state.item = null,
                state.loading = false
            state.error = null
        },
        saveFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        clearCurrent: (state) => {
            state.item = null,
                state.loading = false
            state.error = null
        },
    },
})


// Action creators are generated for each case reducer function
export const {
    getAllRequest, getAllSucess, getAllFailure,


} = clientsSlice.actions

export const { getRequest, getSuccess, getFailure,
    saveRequest, saveSuccess, saveFailure, clearCurrent
} = clientSlice.actions

export default combineReducers({
    list: clientsSlice.reducer,
    current: clientSlice.reducer,
})

