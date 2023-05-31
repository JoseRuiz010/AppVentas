import React from 'react'
import { Navbar } from './Navbar'

export const LayautWhitNavBar = ({ children }) => {
  return (
    <div>
      <header className='sticky top-0 z-50 '>
        <Navbar />
      </header>
      <main className='w-full  mx-auto sm:w-11/12  p-1'>
        {
          children
        }
      </main>
    </div>
  )
}
