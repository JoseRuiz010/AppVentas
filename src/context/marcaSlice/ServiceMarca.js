import { RequestAxios } from "../../Request/FetchRequest";
import { API } from "../../config/ApiURL";

const getAll = async (params = {}, token) => {
    console.log('SERVICES::MARCAS::get');
    return await RequestAxios({
        url: API.MARCAS.GET_ALL,
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
    console.log('SERVICES::MARCAS::get ', API.PRODUCTS.GET(id));
    return await RequestAxios({
        url: API.MARCAS.GET(id),
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
    console.log('SERVICES::MARCAS::POST');
    return await RequestAxios({
        url: API.MARCAS.SAVE,
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
    console.log('SERVICES::MARCAS::PUT');
    return await RequestAxios({
        url: API.MARCAS.UPDATE(data.id),
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

export const serviceMarca = {
    getAll,
    get,
    save,
    update
}