import { RequestAxios } from "../../Request/FetchRequest";

const getAll = async (params = {}, token) => {
    console.log('SERVICES::PRODUCTS::get');
    return await RequestAxios({
        url: '/producto/',
        method: 'GET',
        headersOverride: { 'Content-Type': 'application/json' },
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res
        }

    )
}
const get = async (id, token) => {
    console.log('SERVICES::PRODUCTS::get');
    return await RequestAxios({
        url: '/producto/' + id,
        method: 'GET',
        headersOverride: { 'Content-Type': 'application/json' },
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res
        }

    )
}

export const serviceProduct = {
    getAll,
    get
}