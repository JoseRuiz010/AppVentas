import React from 'react'

export const Card = ({ children, width }) => {
  return (
    <div className='card w-full bg-base-100 shadow-2xl   mx-auto p-3 flex'>
      {children}
    </div>
  )
}
