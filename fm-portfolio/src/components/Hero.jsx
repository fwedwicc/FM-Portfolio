import React from 'react'
import { glow01 } from '../assets'
import Button from '../components/Button'

const Hero = () => {
  return (
    <>
      <img src={glow01} alt="" className='absolute' />
      <div className='pl-[11rem] h-full p-6 flex'>
        <div className='w-[25rem] flex flex-col justify-end items-end pr-4 uppercase'>
          <h4 className="text-white">Front-end</h4>
          <h4 className="text-white">UI/UX</h4>
        </div>
        {/* Right Container */}
        <div className='rounded-md rounded-tr-[2.5rem] h-full p-[1px] bg-border-gradient'>
          <div className='rounded-md rounded-tr-[2.5rem] h-full p-5 bg-[#15131C]'>
            {/* Top side */}
            <div className='grid grid-cols-2'>
              <div>
                <p className='text-white'>Hello World! I am <span className='font-semibold text-indigo-400'>FREDERICK MORENO</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='flex justify-end items-start'>
                <Button text={'Get in touch'} styles={'rounded-tr-[1.5rem]'}></Button>
              </div>
            </div>
            {/* Bottom Side */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
