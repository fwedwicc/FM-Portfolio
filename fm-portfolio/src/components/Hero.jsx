import React from 'react'
import { glow01 } from '../assets'
import Button from '../components/Button'

const Hero = () => {
  return (
    <>
      <img src={glow01} alt="" className='absolute inset-0' />
      <div className='lg:pl-[11rem] pl-[1rem] h-full lg:p-6 p-4 flex'>
        <div className='w-[25rem] flex flex-col justify-end lg:items-end items-start pr-4 uppercase'>
          <h4 className="text-white">Front-end</h4>
          <h4 className="text-white">UI/UX</h4>
        </div>
        {/* Right Container */}
        <div className='rounded-md rounded-tr-[2.5rem] h-full p-[1px] bg-border-gradient'>
          <div className='rounded-md rounded-tr-[2.5rem] h-full p-5 bg-[#15131C] flex flex-col justify-between'>
            {/* Top side */}
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:space-y-0 space-y-4'>
              <div>
                <p className='text-white'>Hello World! I am <span className='font-semibold text-indigo-400'>FREDERICK MORENO</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='flex lg:justify-end lg:items-start'>
                <Button text={'Get in touch'} styles={'lg:rounded-tr-[1.5rem] sm:rounded-md md:rounded-md z-10'}></Button>
              </div>
            </div>
            {/* Bottom Side */}
            <div className='flex items-start'>
              <h1 id='hero-heading-parent'>
                <span>DE</span>
                <div id='hero-heading-child'>
                  <div class="word1">veloper</div>
                  <div class="word2">signer</div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
