import React, { useEffect } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { useDispatch, useSelector } from 'react-redux';
import { useMatches, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

import { BiArrowBack, BiEdit } from 'react-icons/bi';
import { STRING_ROUTES } from '../../../config/Routes';
import { actionClients } from '../../context/clientSlice/ActionClients';
import { ErrorMsj } from '../../components/commons/Error';
import { Card } from '../../components/commons/Card';
import { Tabla } from '../../components/Tabla';
import { BsChevronRight } from 'react-icons/bs'

export async function loader({ params }) {
  // const product = await actionProduct.get(dispatch, params.id);
  // return { product: product };
}


export const Client = () => {
  const dispatch = useDispatch()
  const params = useMatches()
  const navigate = useNavigate()
  const id = params[0].params.id
  console.log({ params });
  const { item, error, loading } = useSelector(state => state.clients.current)
  useEffect(() => {
    getClient()
  }, [])
  const getClient = async () => {
    await actionClients.get(dispatch, id)
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
  const columns = [
    {
      name: 'Descripcion',
      selector: row => row.descripcion,
      sortable: true,

    },
    {
      name: 'Fecha Inicio',
      selector: row => row.estado,
      sortable: true,
    },
    {
      name: 'Total',
      selector: row => '$ ' + row.total,
      sortable: true,
    },
    {
      name: 'Action',
      sortable: true,
      cell: row => {

        return (
          <div className='cursor-pointer  p-3 rounded-full hover:bg-gray-100 '
            onClick={() => navigate(STRING_ROUTES.CLIENT.replace(':id', row.id))}
          >
            <span className='font-bold'><BsChevronRight /></span>
          </div>
        )
      }
    },
  ];


  return (
    <LayautWhitNavBar>
      <div className='mx-auto  '>
        <div className='flex gap-3 mb-4 cursor-pointer' onClick={() => navigate(STRING_ROUTES.CLIENTS)}>
          <p className='my-auto'>
            <BiArrowBack size={30} />
          </p>
          <h1 className='font-bold text-3xl'>{item?.nombre + ' ' + item?.apellido}</h1>
        </div>

        {item?.urlImagen &&
          <figure className='w-full'>
            <img className='w-full' src={item?.urlImagen} />
          </figure>
        }

        <div className='flex flex-col md:flex-row'>
          <div className='p-2 basis-1/4'>
            <CardWithDivide>
              {!item?.urlImagen &&
                <figure className='z-0 w-28 mx-auto mb-10 rounded-full border-[2px] border-gray-500 p-1'>
                  <img className='w-full' src={'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'} />
                </figure>
              }

              <ItemsCard label={'Nombre'} info={item?.nombre} />
              <ItemsCard label={'Apellido'} info={item?.apellido} />
              <ItemsCard label={'Email'} info={item?.email} />
              <ItemsCard label={'Telefono'} info={item?.telefono} />
              <ItemsCard label={'Direccion'} info={item?.direccion} />

              <div className='flex justify-around p-2 mt-3'>
                <button className='btn gap-2 bg-yellow-500 mt-3'
                  onClick={() => navigate(STRING_ROUTES.CLIENT_EDIT.replace(':id', item.id))}
                >
                  Editar
                  <BiEdit size={20} />
                </button>
              </div>
            </CardWithDivide>
          </div>
          <div className='p-2 basis-3/4'>
            <h1 className='font-bold text-2xl mb-5'>Cuentas</h1>
            <div className='card bg-base-100 shadow-xl mx-auto p-1 flex' >
              {item?.cuentas && <Tabla
                columns={columns}
                data={item?.cuentas}
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