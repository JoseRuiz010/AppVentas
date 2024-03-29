import { RequestAxios } from "../../Request/FetchRequest";
import { API } from "../../config/ApiURL";

const getAll = async (params = {}, token) => {
    console.log('SERVICES::Clients::get');
    return await RequestAxios({
        url: API.CLIENTS.GET_ALL,
        method: 'GET',
        headersOverride: { 'Content-Type': 'application/json' },
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res.data
        }

    )
}
const get = async (id, token) => {
    console.log('SERVICES::Clients::get');
    return await RequestAxios({
        url: API.CLIENTS.GET(id),
        method: 'GET',
        headersOverride: { 'Content-Type': 'application/json' },
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res
        }

    )
}
const save = async (data, token) => {
    console.log('SERVICES::Clients::POST');
    return await RequestAxios({
        url: API.CLIENTS.SAVE,
        method: 'POST',
        headersOverride: { 'Content-Type': 'application/json' },
        data: JSON.stringify(data)
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res
        }

    )
}
const update = async (data, token) => {
    console.log('SERVICES::Clients::PUT');
    return await RequestAxios({
        url: API.CLIENTS.UPDATE(data.id),
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

export const serviceClient = {
    getAll,
    get,
    save,
    update
}