import { RequestAxios } from "../../Request/FetchRequest"


export const login = async (values) => {

    return await RequestAxios({
        url: '/auth/login/',
        method: 'POST',
        headersOverride: { 'Content-Type': 'application/json' },
        data: values
    })

}
const logout = () => {

}

