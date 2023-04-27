import axios from "axios"

const AxiosRequest = axios.create(
    {
        baseURL: "http://localhost:8090/",
        headers: {
            "Content-Type": "application/json"
        }
    }
)

export const request = ({
    url = '',
    method = 'GET',
    data = {},
    accessToken = null,
    authType = 'Bearer',
    onSuccess = () => { },
    onFailure = () => { },
    headersOverride = null,
}) => {
    return Axios({
        url,
        method,
        data,
        accessToken,
        authType,
        onSuccess,
        onFailure,
        headersOverride,
    });
};

const requestAxion = action => {
    const {
        url,
        method,
        data,
        accessToken,
        authType,
        onSuccess,
        onFailure,
        headersOverride,
    } = action

    return AxiosRequest.request({ url, method })


}

