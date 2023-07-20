import { RequestAxios } from "../../Request/FetchRequest";
import { API } from "../../config/ApiURL";

const getAll = async (params = {}, token) => {
    console.log('SERVICES::CUENTAS::get');
    return await RequestAxios({

        url: API.CUENTAS.GET_ALL,
        method: 'GET',
        headersOverride: { 'Content-Type': 'application/json' },
    }).then(
        res => {
            console.log('RETURN FROM API', res.data);
            return res.data
        }

    )
}
const get = async (id, token) => {
    console.log('SERVICES::CUENTAS::get');
    return await RequestAxios({
        url: API.CUENTAS.GET(id),
        method: 'GET',
        headersOverride: { 'Content-Type': 'application/json' },
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res
        }

    )
}
const getClient = async (id, token) => {
    console.log('SERVICES::CUENTASByClient::get');
    return await RequestAxios({
        url: API.CUENTAS.GET_By_CLIENT(id),
        method: 'GET',
        headersOverride: { 'Content-Type': 'application/json' },
    }).then(
        res => {
            console.log('RETURN FROM API', res.data);
            return res.data
        }

    )
}
const save = async (data, token) => {
    console.log('SERVICES::CUENTAS::POST');
    return await RequestAxios({
        url: API.CUENTAS.SAVE,
        method: 'POST',
        headersOverride: { 'Content-Type': 'application/json' },
        data: JSON.stringify(data)
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res.data
        }

    )
}
const update = async (data, token) => {
    console.log('SERVICES::CUENTAS::PUT');
    return await RequestAxios({
        url: API.CUENTAS.GET(data.id),
        method: 'PUT',
        headersOverride: { 'Content-Type': 'application/json' },
        data: JSON.stringify(data)
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res.data
        }

    )
}

export const serviceCuenta = {
    getAll,
    get,
    save,
    update,
    getClient
}