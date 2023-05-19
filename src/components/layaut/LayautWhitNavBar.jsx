import React from 'react'
import { Navbar } from './Navbar'

export const LayautWhitNavBar = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='w-11/12 mx-auto  mt-3'>
        {
          children
        }
      </main>
    </div>
  )
}
