import React from 'react'
import Footer from './Footer'
import Button from './Button'
import { glow05 } from '../assets'

const Contact = () => {
  return (
    <div className='flex justify-center items-center h-full p-[2rem] relative'>
      <div className='h-full w-full grid grid-rows-6 z-20'>
        <div className='row-span-4 rounded-md p-4 text-white'>
          <div className='space-y-4'>
            <div>
              <h1 className='uppercase font-black text-[3rem] lg:text-[9rem] whitespace-nowrap leading-none' id='scroll-animation-'>Get in touch.</h1>
            </div>
            <div className='space-y-1.5 pb-[0.8rem]'>
              <span className='block text-indigo-400 font-semibold'>Frederick Moreno</span>
              <span className='block'>moreno.frederick.capiral@gmail.com</span>
              <span className='block'>+63 951 432 6912</span>
              <span className='block'>Caloocan City</span>
            </div>
            <div>
              <Button text={'Drop me a line'} styles={'bg-indigo-500 hover:bg-red-500'}></Button>
            </div>
          </div>
        </div>
        <div className='row-span-2 flex items-end'>
          <Footer />
        </div>
      </div>
      <img src={glow05} alt="Glow eclipse" className='absolute bottom-0 z-10' id='scroll-animation-' />
    </div>

  )
}

export default Contact
