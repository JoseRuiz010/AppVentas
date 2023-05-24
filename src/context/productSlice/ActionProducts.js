import { getAllRequest, getAllSucess, getFailure, getRequest, getSuccess } from "./ProductSlice";
import { serviceProduct } from "./ServiceProduct"

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
const saveOrUpdate = () => { }
const del = () => { }

export const actionProduct = {
  get,
  GetAll,
  saveOrUpdate,
  del
}
