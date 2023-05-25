import { clearCurrent, getAllRequest, getAllSucess, getFailure, getRequest, getSuccess, saveFailure, saveRequest, saveSuccess } from "./clientSlice";
import { serviceClient } from "./ServiceClient"

const ClearCurrent = (dispatch) => {
  dispatch(clearCurrent())
}

const GetAll = async (dispatch) => {

  dispatch(getAllRequest())
  const res = await serviceClient.getAll()
  console.log(res);
  if (res.error) {
    dispatch(getAllFailure(JSON.stringify(res.error, null, 4)))
  }
  if (res.data) {
    dispatch(getAllSucess(res.data))
    // dispatch(deleteError())
  }
  return res.data;
}

const get = async (dispatch, id) => {
  dispatch(getRequest())
  const res = await serviceClient.get(id, 'dd')
  console.log(res);
  if (res.error) {
    dispatch(getFailure(JSON.stringify(res.error, null, 4)))
  }
  if (res.data) {
    dispatch(getSuccess(res.data))
    // dispatch(deleteError())
  }
  return res;
}
const saveOrUpdate = async (dispatch, client) => {

  console.log("SaveOrUpdate", client);
  dispatch(saveRequest())

  let res;
  if (!client.id) {
    console.log('====================================');
    console.log('No tiene id');
    console.log('====================================');
    res = await serviceClient.save(client, '')
    console.log('Response save::', res);
  } else {
    res = await serviceClient.update(client, '')
  }
  if (res.data) {
    dispatch(saveSuccess())
  } else {
    dispatch(saveFailure(res.error))
  }


}
const del = () => { }

export const actionClients = {
  get,
  GetAll,
  saveOrUpdate,
  del,
  ClearCurrent
}
