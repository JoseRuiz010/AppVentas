import React, { useEffect } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { Tabla } from '../../components/Tabla'
import { actionProduct } from '../../context/productSlice/ActionProducts'
import { useDispatch, useSelector } from "react-redux"
import Loader from '../../components/Loader'
import { BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import { STRING_ROUTES } from '../../../config/Routes'
import { ErrorMsj } from '../../components/commons/Error'
import { Header } from '../../components/layaut/Header'
import { Button } from '../../components/commons/Button'
export const Products = () => {
    const { items, error, loading } = useSelector((state) => state.products.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        getProducs()
        return () => {
            actionProduct.ClearCurrent(dispatch)
        }
    }, [])


    const getProducs = async () => {
        actionProduct.GetAll(dispatch)
    }
    const columns = [
        {
            name: 'Descripcion',
            selector: row => row.descripcion,
            sortable: true,

        },
        {
            name: 'Precio',
            selector: row => row.precio,
            sortable: true,
        },
        {
            name: 'Capacidad',
            selector: row => row.capacidad,
            sortable: true,
        },
        {
            name: 'Linea',
            selector: row => row.marca.nombre,
            sortable: true,
        },
        {
            name: 'Action',
            sortable: true,
            cell: row => {

                return (
                    <div className='cursor-pointer  p-3 rounded-full hover:bg-gray-100 '
                        onClick={() => navigate(STRING_ROUTES.PRODUCT.replace(':id', row.id))}
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
                <div className='w-11/12 mx-auto'>
                    <Header
                        title={"Productos"}
                        className={'flex justify-between'}
                        component={
                            <Button
                                action={() => navigate(STRING_ROUTES.PRODUCT_NEW)}
                                textButton={'Crear Producto'}
                            />
                        }
                    />
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
