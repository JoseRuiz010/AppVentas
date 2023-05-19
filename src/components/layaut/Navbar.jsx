import React from 'react'
import { STRING_ROUTES } from '../../../config/Routes'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  return (
    <div className='h-16 bg-slate-100'>
      <div className='flex h-full  justify-around w-10/12 mx-auto'>

        <div className='my-auto'>
          <h1 className='text-2xl' >
            <NavLink to={STRING_ROUTES.HOME}>
              LAB9
            </NavLink>
          </h1>
        </div>
        <div className='my-auto'>
          <ul className='flex gap-x-10'>
            <li className='font-bold cursor-pointer hover:text-gray-400'>
              <NavLink to={STRING_ROUTES.CLIENTS}>
                Cuentas
              </NavLink>
            </li>
            <li className='font-bold cursor-pointer hover:text-gray-400'>
              <NavLink to={STRING_ROUTES.CLIENTS}>
                Clientes
              </NavLink>
            </li>
            <li className='font-bold cursor-pointer hover:text-gray-400'>
              <NavLink to={STRING_ROUTES.PRODUCTS}>
                Produtos
              </NavLink>
            </li>
            <li className='font-bold cursor-pointer  hover:text-gray-400'>
              <NavLink to={STRING_ROUTES.PRODUCTS}>
                Vendedores
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
