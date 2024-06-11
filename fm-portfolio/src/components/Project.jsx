import React from 'react'
import {glow04} from '../assets'

const Project = () => {
  return (
    <>
      <img src={glow04} alt="Glow eclipse" className='absolute top-[360vh]' id='scroll-animation-' />
      <div className='lg:pl-[13.5rem] pl-[2rem] flex h-full'>
        <div className='flex h-full items-center'>
          <div className='grid grid-cols-8'>
            <div className='lg:col-span-4 col-span-7 p-px'>
              <h1 className='uppercase text-white font-black text-[3rem] lg:text-[7rem] whitespace-nowrap leading-none' id='scroll-animation-'>Projects</h1>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate! Sapiente placeat tempora ab eaque veniam maxime, doloremque iusto ipsa dolores! Natus reprehenderit vero et ex culpa expedita nostrum facilis.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Project
