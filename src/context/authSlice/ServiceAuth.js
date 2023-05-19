import { RequestAxios } from "../../Request/FetchRequest"
import { deleteError, deletteToken, setError, setToken } from "./AuthSlice"


export const login = async (values, dispatch) => {

    const res = await RequestAxios({
        url: '/auth/login/',
        method: 'POST',
        headersOverride: { 'Content-Type': 'application/json' },
        data: values
    })
    if (res.error) {
        dispatch(setError(JSON.stringify(res.error, null, 4)))
    }
    if (res.data) {
        localStorage.setItem('token_user', res.data.token)
        dispatch(setToken(res.data.token))
        dispatch(deleteError())
    }
}
export const logout = (dispatch) => {
    localStorage.removeItem('token_user')
    dispatch(deletteToken())
}

