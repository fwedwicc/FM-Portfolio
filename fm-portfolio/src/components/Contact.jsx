import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='flex justify-center items-center h-full p-[2rem]'>
      <div className='h-full w-full grid grid-rows-6'>
        <div className='row-span-4 bg-border-gradient-5 rounded-md p-px'>
          <div className='bg-base p-4 h-full w-full rounded-md text-white'>
            <div className='flex flex-col h-full justify-between'>
              <div className=''>
                <h1 className='uppercase font-black text-[3rem] lg:text-[9rem] whitespace-nowrap leading-none' id='scroll-animation-'>Get in touch.</h1>
              </div>
              <div className=''>
                <span className='block'>Frederick Moreno</span>
                <span className='block'>moreno.frederick.capiral@gmail.com</span>
                <span className='block'>+63 951 432 6912</span>
                <span className='block'>Caloocan City</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row-span-2 flex items-end'>
          <Footer />
        </div>
      </div>
    </div>

  )
}

export default Contact
