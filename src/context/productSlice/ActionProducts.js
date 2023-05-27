import { clearCurrent, getAllFailure, getAllRequest, getAllSucess, getFailure, getRequest, getSuccess, saveFailure, saveRequest, saveSuccess } from "./ProductSlice";
import { serviceProduct } from "./ServiceProduct"

const ClearCurrent = (dispatch) => {
  dispatch(clearCurrent())
}

const GetAll = async (dispatch) => {

  dispatch(getAllRequest())
  const res = await serviceProduct.getAll()
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
  const res = await serviceProduct.get(id, 'dd')
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
const saveOrUpdate = async (dispatch, product) => {

  console.log("SaveOrUpdate", product);
  dispatch(saveRequest())

  let res;
  if (!product.id) {
    console.log('====================================');
    console.log('No tiene id');
    console.log('====================================');
    res = await serviceProduct.save(product, '')
    console.log('Response save::', res);
  } else {
    res = await serviceProduct.update(product, '')
  }
  if (res.data) {
    dispatch(saveSuccess())
  } else {
    dispatch(saveFailure(res.error))
  }


}
const del = () => { }

export const actionProduct = {
  get,
  GetAll,
  saveOrUpdate,
  del,
  ClearCurrent
}
