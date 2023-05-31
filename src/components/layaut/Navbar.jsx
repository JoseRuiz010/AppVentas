import React, { useState } from 'react'
import { STRING_ROUTES } from '../../../config/Routes'
import { NavLink } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { FaRegUserCircle } from 'react-icons/fa'
import logo from '../../assets/Logo.png'
import { logout } from "../../context/authSlice/ServiceAuth"
import { useDispatch } from 'react-redux'
export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  const dispatch = useDispatch();
  const handleOpen = () => setisOpen(prev => !prev)

  return (
    <div className={`sm:px-5 px-0 bg-white sm:h-20 z-10 shadow-md mb-10 `}>
      <div className='p-3 sm:mx-auto flex flex-col  w-full sm:justify-between sm:flex-row sm:border-none border-b-[1px]'>
        <div className='flex  justify-between h-full sm:flex-row'>
          <p className=' sm:hidden my-auto' onClick={handleOpen}>
            {!isOpen ? <BiMenuAltLeft size={25} /> : <GrClose size={25} />}
          </p>
          <div className=''>
            <img className='w-16 m-auto rounded-full my-auto' src={logo} />
          </div>
          <div className='my-auto sm:hidden text-right ' to={STRING_ROUTES.HOME} label={"LAB9"}>
            <FaRegUserCircle size={30} color='gray' className='float-right sm:w-full' />
          </div>
        </div>
        <div className={`relative sm:w-3/4 z-50 lg:w-1/2  flex flex-col w-full sm:my-auto sm:flex-row justify-around `}>
          <ul className={`absolute sm:flex z-50  sm:rounded-none bg-white  rounded-b-xl sm:shadow-none shadow-xl  sm:static sm:justify-around  w-full top-5 ${isOpen ? 'left-0 right-0' : '-left-[640px]'} divide-y-2 sm:divide-none transition-all`}>
            <NavItems to={STRING_ROUTES.CUENTAS} label={"Cuentas"} onClick={handleOpen} />
            <NavItems to={STRING_ROUTES.CLIENTS} label={"Clientes"} onClick={handleOpen} />
            <NavItems to={STRING_ROUTES.PRODUCTS} label={"Productos"} onClick={handleOpen} />
            <NavItems to={STRING_ROUTES.PRODUCTS} label={"Vendedores"} onClick={handleOpen} />
            <NavItems to={STRING_ROUTES.PRODUCTS} label={"Logout"} labelColor={'text-red-400'}
              onClick={() => {
                logout(dispatch)
                handleOpen()
              }} />
          </ul>
          <div className='my-auto hidden sm:block text-right' to={STRING_ROUTES.HOME} label={"LAB9"}>
            <FaRegUserCircle size={30} color='gray' className='float-right sm:w-full' />
          </div>
        </div >
      </div>
    </div >
  )
}

const NavItems = ({ to, label, onClick, labelColor = 'text-blue-700' }) => {
  return (
    <div className='my-auto mb-4 sm:mb-0' >
      <li className={`font-bold   ${labelColor ? labelColor : ''} cursor-pointer text-center sm:text-lg  hover:text-purple-600 `}>
        <NavLink to={to} onClick={onClick}>
          {label}
        </NavLink>
      </li>
    </div>
  )
}
