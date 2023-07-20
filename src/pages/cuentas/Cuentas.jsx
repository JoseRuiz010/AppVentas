import React, { useEffect } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { Tabla } from '../../components/Tabla'
import { useDispatch, useSelector } from "react-redux"
import { actionCuenta } from '../../context/cuentaSlice/ActionCuenta'
import { BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import { STRING_ROUTES } from '../../../config/Routes'
import { ErrorMsj } from '../../components/commons/Error'



export const Cuentas = () => {
  const { items, error, loading } = useSelector((state) => state.cuentas.list)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getCuentas()
    return () => {
      actionCuenta.ClearCurrent(dispatch)
    }
  }, [])


  const getCuentas = async () => {
    actionCuenta.GetAll(dispatch)
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
      selector: row => row.cliente.name + " " + row.cliente.lastName,
      sortable: true,

    },
    {
      name: 'Fecha Inicio',
      selector: row => row.fechaInicio,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: row => row.estado_cuenta,
      sortable: true,
    },
    {
      name: 'Total',
      selector: row => '$ ' + row.total ? row.total : '0',
      sortable: true,
    },
    {
      name: 'Action',
      sortable: true,
      cell: row => {

        return (
          <div className='cursor-pointer  p-3 rounded-full hover:bg-gray-100 '
            onClick={() => navigate(STRING_ROUTES.CUENTA.replace(':id', row.id))}
          >
            <span className='font-bold'><BsChevronRight /></span>
          </div>
        )
      }
    },
  ];


  return (
    <>
      <LayautWhitNavBar>
        <div className='w-11/12 mx-auto'>
          <div className='flex justify-between '>
            <h3 className='font-bold text-2xl '>Cuentas</h3>
            <button className='btn'
              onClick={() => navigate(STRING_ROUTES.CUENTA_NEW)}
            >Crear Cuenta</button>
          </div>

          <div className='mt-4'>
            {<Tabla
              data={items}
              loading={loading}
              pagination={true}
              columns={columns}

            />}
          </div>
        </div>
      </LayautWhitNavBar>
    </>
  )
}
