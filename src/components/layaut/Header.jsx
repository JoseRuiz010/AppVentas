import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

export const Header = ({ title, action }) => {
  return (
    <div className='flex gap-3 mb-4 cursor-pointer' onClick={action}>
      <p className='my-auto'>
        <BiArrowBack size={30} />
      </p>
      <h1 className='font-bold text-3xl'>{title}</h1>
    </div>
  )
}
