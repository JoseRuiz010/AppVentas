import { clearCurrent, getAllFailure, getAllRequest, getAllSucess, getFailure, getRequest, getSuccess, saveFailure, saveRequest, saveSuccess } from "./MarcaSlice";
import { serviceMarca } from "./ServiceMarca"

const ClearCurrent = (dispatch) => {
  dispatch(clearCurrent())
}

const GetAll = async (dispatch) => {

  dispatch(getAllRequest())
  const res = await serviceMarca.getAll()
  console.log(res);
  if (res.error) {
    dispatch(getAllFailure(JSON.stringify(res.error, null, 4)))
  }
  if (res.data) {
    dispatch(getAllSucess(res.data))
  }
  return res.data.data;
}

const get = async (dispatch, id) => {
  dispatch(getRequest())
  const res = await serviceMarca.get(id, 'dd')
  console.log(res);
  if (res.error) {
    dispatch(getFailure(JSON.stringify(res.error, null, 4)))
  }
  if (res.data) {
    dispatch(getSuccess(res.data))
  }
  return res;
}

const saveOrUpdate = async (dispatch, product) => {

  console.log("SaveOrUpdate", product);
  dispatch(saveRequest())
  let res;
  if (!product.id) {
    res = await serviceMarca.save(product, '')
    console.log('Response save::', res);
  } else {
    res = await serviceMarca.update(product, '')
  }
  if (res.data) {
    dispatch(saveSuccess())
  } else {
    dispatch(saveFailure(res.error))
  }
}

const del = () => { }

export const actionMarca = {
  get,
  GetAll,
  saveOrUpdate,
  del,
  ClearCurrent
}
