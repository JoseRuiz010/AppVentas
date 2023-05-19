import React from 'react'
import { LayautWhitNavBar } from '../../components/layaut/LayautWhitNavBar'
import { Tabla } from '../../components/Tabla'

export const Products = () => {
    return (
        <>
            <LayautWhitNavBar>
                <div className='bg-blue-500'>
                    <div className='flex justify-between '>
                        <h3 className='font-bold text-2xl '>Products</h3>
                        <button className='btn'>Crear Producto</button>
                    </div>
                    <div className='mt-4'>
                        <Tabla />
                    </div>
                </div>
            </LayautWhitNavBar>
        </>
    )
}
