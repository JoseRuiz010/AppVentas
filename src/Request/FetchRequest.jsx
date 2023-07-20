import axios from "axios"
import { URL_SERVER } from "../config/ApiURL"

const AXIOS = axios.create({
    baseURL: URL_SERVER
})
export const RequestAxios = ({ url, authToken, method, data, headersOverride }) => {

    return axiosRequest({ url, authToken, method, data, headersOverride })


}


const axiosRequest = ({ url, authToken, method, data = '', headersOverride = {} }) => {

    const dataOrParams = ['GET', 'DELETE'].includes(method.toUpperCase()) ? 'params' : 'data';

    console.log('REQUEST_ACTION START');
    console.log('Authorization::', authToken);

    let headers = {}
    if (authToken != null) {
        headers = { ...headers, Authorization: authToken }
    }
    headers = { ...headers, ...headersOverride }
    console.log("METHOD", method)
    console.log({ dataOrParams: data })
    return AXIOS.request(
        {
            url,
            method,
            headers,
            [dataOrParams]: data
        }

    ).then(({ data }) => {
        console.log({ success: true, data, error: null })

        if (!data.data && data.error) {
            console.log({ success: false, data: null, error: data.error });
            return { success: true, data: null, error: data.error }
        }
        return { success: true, data: data, error: null }
    }).catch(err => {
        console.log('REQUEST_ERROR', err);
        let error = null;
        let data = null;
        if (err.response) {
            console.log('REQUEST_ERROR::RESPONSE', err.response.data.error);
            error = err.response.data.error;
        } else if (err.request) {
            console.log('REQUEST_ERROR::REQUEST', err.request);
            const message = err.message === 'Network Error' ? 'NETWORK_ERROR' : err.message;
            error = { code: 'ERROR_401', message };
        } else {
            console.log('REQUEST_ERROR::MESSAGE', err.message);
            error = err.message;
        }
        if (err.response && err.response.status === 401) {
            console.log("REQUEST_ERROR::ERROR_401", window.location.pathname);
            error = { code: 'ERROR_401', message: 'NOT_AUTHORIZED' };
        }
        if (err.response && err.response.status === 403) {
            console.log("REQUEST_ERROR::ERROR_403", window.location.pathname);
            error = { code: 'ERROR_403', message: 'REQUET_FORBIDEN' };
        }
        console.log({ success: false, data, error });
        return { success: false, data, error }
    }
    )
}