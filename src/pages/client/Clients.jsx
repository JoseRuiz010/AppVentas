import React, { useEffect } from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { Tabla } from '../../components/Tabla'
import { useDispatch, useSelector } from "react-redux"
import { actionClients } from '../../context/clientSlice/ActionClients'
import { BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import { STRING_ROUTES } from '../../../config/Routes'
export const Clients = () => {
    const { items, error, loading } = useSelector((state) => state.clients.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        getClients()
        return () => {
            actionClients.ClearCurrent(dispatch)
        }
    }, [])


    const getClients = async () => {
        actionClients.GetAll(dispatch)
    }
    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,

        },
        {
            name: 'Apellido',
            selector: row => row.apellido,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
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
        <>
            <LayautWhitNavBar>
                <div className='w-11/12 mx-auto'>
                    <div className='flex justify-between '>
                        <h3 className='font-bold text-2xl '>Clients</h3>
                        <button className='btn'
                            onClick={() => navigate(STRING_ROUTES.CLIENT_NEW)}
                        >Crear Cliente</button>
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
