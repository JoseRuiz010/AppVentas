import React, { useEffect } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { Tabla } from '../../components/Tabla'
import { actionMarca } from '../../context/marcaSlice/ActionMarca'
import { useDispatch, useSelector } from "react-redux"
import Loader from '../../components/Loader'
import { BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import { STRING_ROUTES } from '../../../config/Routes'
import { ErrorMsj } from '../../components/commons/Error'
import { Header } from '../../components/layaut/Header'
export const Marcas = () => {
    const { items, error, loading } = useSelector((state) => state.marcas.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        getProducs()
        return () => {
            actionMarca.ClearCurrent(dispatch)
        }
    }, [])


    const getProducs = async () => {
        actionMarca.GetAll(dispatch)
    }
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,

        },
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
        },

        {
            name: 'Action',
            sortable: true,
            cell: row => {

                return (
                    <div className='cursor-pointer  p-3 rounded-full hover:bg-gray-100 '
                        onClick={() => navigate(STRING_ROUTES.MARCA.replace(':id', row.id))}
                    >
                        <span className='font-bold'><BsChevronRight /></span>
                    </div>
                )
            }
        },
    ];
    if (loading) {
        <LayautWhitNavBar>
            <div>
                <h1>Loading .....</h1>
            </div>
        </LayautWhitNavBar>
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
        <>
            <LayautWhitNavBar>
                <Header title={"Products"} action={() => navigate(STRING_ROUTES.MARCA_NEW)} />
                <div className='w-11/12 mx-auto'>
                    {/* <div className='flex justify-between '>
                        <h3 className='font-bold text-2xl '>Products</h3>
                        <button className='btn'
                            onClick={() => navigate(STRING_ROUTES.MARCA_NEW)}
                        >Crear Marca</button>
                    </div> */}

                    <div className='mt-4'>
                        {items && <Tabla
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
