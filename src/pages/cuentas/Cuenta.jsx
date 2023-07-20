import React, { useEffect } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { useDispatch, useSelector } from 'react-redux';
import { useMatches, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

import { BiArrowBack, BiEdit } from 'react-icons/bi';
import { STRING_ROUTES } from '../../../config/Routes';
import { actionCuenta } from '../../context/cuentaSlice/ActionCuenta';
import { ErrorMsj } from '../../components/commons/Error';
import { Card } from '../../components/commons/Card';
import { Tabla } from '../../components/Tabla';
import { BsChevronRight } from 'react-icons/bs'

export async function loader({ params }) {
  // const product = await actionProduct.get(dispatch, params.id);
  // return { product: product };
}


export const Cuenta = () => {
  const dispatch = useDispatch()
  const params = useMatches()
  const navigate = useNavigate()
  const id = params[0].params.id
  console.log({ params });
  const { item, error, loading } = useSelector(state => state.cuentas.current)
  useEffect(() => {
    getCcuenta()
  }, [])
  const getCcuenta = async () => {
    await actionCuenta.get(dispatch, id)
  }

  if (loading || item == null && error == null) {
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
  const columns = [
    {
      name: 'Fecha',
      selector: row => row.fecha,
      sortable: true,

    },
    {
      name: 'Producto',
      selector: row => row.producto?.descripcion ? row.producto?.descripcion : row.descripcion,
      sortable: true,
    },
    {
      name: 'Cantidad',
      selector: row => row.cantidad ? row.cantidad : ' - ',
      sortable: true,
    },
    {
      name: 'Subtotal',
      selector: row => '$ ' + (!row.monto ? row.subtotal : row.monto),
      sortable: true,
    },

  ];


  return (
    <LayautWhitNavBar>
      <div className='mx-auto  '>
        <div className='flex gap-3 mb-4 cursor-pointer' onClick={() => navigate(-1)}>
          <p className='my-auto'>
            <BiArrowBack size={30} />
          </p>
          <h1 className='font-bold text-3xl'>{item?.fechaInicio + ' - ' + item?.cliente.name + ' ' + item?.cliente.lastName}</h1>
        </div>

        {item?.urlImagen &&
          <figure className='w-full'>
            <img className='w-full' src={item?.urlImagen} />
          </figure>
        }

        <div className='flex flex-col'>
          <div className='p-2 basis-1/4'>
            {/* <h1 className='font-bold text-2xl mb-5'>Descripcion</h1> */}
            <div className='flex mt-4'>
              <ItemsCard label={'Fecha inicio: '} info={item?.fechaInicio} />
              <ItemsCard label={'Estado: '} info={item?.estado} />
            </div>
          </div>
          <div className='p-2 basis-3/4'>
            <h1 className='font-bold text-2xl mb-5'>Cuentas</h1>
            <div className='card bg-base-100 shadow-xl mx-auto p-1 flex' >
              {item?.lineas && <Tabla
                columns={columns}
                data={item?.lineas}
              />
              }
            </div>
          </div>
        </div>

      </div>
    </LayautWhitNavBar >
  )
}

export const CardWithDivide = ({ children }) => {

  return (
    <Card>
      <div className='divide-y-2   bg-white w-full  flex flex-col justify-around'>
        {
          children
        }
      </div>
    </Card>
  )
}

export const ItemsCard = ({ label, info }) => {

  return (
    <div className='flex justify-between mx-4 mb-3 z-0'>
      <span className='font-bold'>{label}</span>
      <p>{info}</p>
    </div>
  )
}