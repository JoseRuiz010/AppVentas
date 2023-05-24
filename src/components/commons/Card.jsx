import React from 'react'

export const Card = ({ children }) => {
  return (
    <div className='card w-96 mt-9 bg-base-100 shadow-xl mx-auto p-5 flex'>
      {children}
    </div>
  )
}
