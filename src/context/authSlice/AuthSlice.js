import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        deletteToken: (state) => {
            state.token = null
        },

        setError: (state, action) => {
            state.error = action.payload
        },
        deleteError: (state) => {
            state.error = null
        },


    },
})

// Action creators are generated for each case reducer function
export const { setToken, deletteToken, setError, deleteError } = authSlice.actions

export default authSlice.reducer

