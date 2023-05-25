import { RequestAxios } from "../../Request/FetchRequest";

const getAll = async (params = {}, token) => {
    console.log('SERVICES::Clients::get');
    return await RequestAxios({
        url: '/cliente/',
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
    console.log('SERVICES::Clients::get');
    return await RequestAxios({
        url: '/cliente/' + id,
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
        url: '/cliente/',
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
        url: '/cliente/' + data.id,
        method: 'PUT',
        headersOverride: { 'Content-Type': 'application/json' },
        data: JSON.stringify(data)
    }).then(
        res => {
            console.log('RETURN FROM API', res);
            return res
        }

    )
}

export const serviceClient = {
    getAll,
    get,
    save,
    update
}