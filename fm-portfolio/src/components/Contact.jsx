import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='flex justify-center items-center h-full border p-[2rem]'>
      <div className='border h-full w-full grid grid-rows-6'>
        <div className='row-span-4 border'></div>
        <div className='row-span-2 border border-red-500 flex items-end'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Contact
