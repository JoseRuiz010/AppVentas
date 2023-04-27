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
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.token = action.payload
        },
        deletteToken: (state) => {
            state.token = null
        },

        setError: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
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

