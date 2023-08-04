import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

export const Header = ({ title, action, component, className }) => {
  return (
    <div className={`${!className ? 'flex gap-3 mb-4 cursor-pointer' : className}`}>
      {action && <p className='my-auto' onClick={action}>
        <BiArrowBack size={30} />
      </p>}
      <h1 className='font-bold text-3xl'>{title}</h1>
      {
        component && component
      }
    </div>
  )
}
