import React, { useEffect } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { actionMarca } from '../../context/marcaSlice/ActionMarca';
import { useDispatch, useSelector } from 'react-redux';
import { useMatches, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

import { BiArrowBack, BiEdit } from 'react-icons/bi';
import { STRING_ROUTES } from '../../../config/Routes';
import { ErrorMsj } from '../../components/commons/Error';


export async function loader({ params }) {
  // const product = await actionProduct.get(dispatch, params.id);
  // return { product: product };
}


export const Marca = () => {
  const dispatch = useDispatch()
  const params = useMatches()
  const navigate = useNavigate()
  const id = params[0].params.id
  console.log({ params });
  const { item, error, loading } = useSelector(state => state.marcas.current)
  useEffect(() => {
    getProduct()
  }, [])
  const getProduct = async () => {
    await actionMarca.get(dispatch, id)
  }

  if (loading) {
    return (
      <LayautWhitNavBar>
        <Loader />
      </LayautWhitNavBar>
    )
  }
  if (error) {
    return (
      <LayautWhitNavBar>
        <div className='w-11/12 mx-auto'>
          <ErrorMsj>
            {error}
          </ErrorMsj>
        </div>
      </LayautWhitNavBar>
    )
  }


  return (
    <LayautWhitNavBar>
      <div className='max-w-2xl mx-auto'>
        <div className='flex gap-3 mb-4 cursor-pointer' onClick={() => navigate(-1)}>
          <p className='my-auto'>
            <BiArrowBack size={30} />
          </p>
          <h1 className='font-bold text-3xl'>{item?.nombre}</h1>
        </div>
        <div className='divide-x-2 p-4 rounded-2xl flex gap-5 mx-auto  shadow-2xl'>
          {item?.urlImagen &&
            <figure className='w-full'>
              <img className='w-full' src={item?.urlImagen} />
            </figure>
          }
          <div className='divide-y-2 bg-white w-full p-4 flex flex-col justify-around'>
            <div className='flex justify-between  mx-4 mb-3'>
              <span className='font-bold'>Nombre</span>
              <p>{item?.nombre}</p>
            </div>
            <div className='flex justify-around p-2 mt-3'>
              <button className='btn gap-2 bg-yellow-500 mt-3'
                onClick={() => navigate(-1)}
              >
                Editar
                <BiEdit size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayautWhitNavBar>
  )
}
