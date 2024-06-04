import React from 'react'
import { glow01 } from '../assets'

const Hero = () => {
  const typo = 'text-white font-semibold';
  return (
    <>
      <img src={glow01} alt="" className='fixed' />
      <div className='pl-[11rem] h-full p-6 flex'>
        <div className='w-[10rem] flex flex-col justify-end items-end pr-4'>
          <h4 className={typo}>Front-end</h4>
          <h4 className={typo}>UI/UX</h4>
        </div>
        {/* Right Container */}
        <div className='border rounded-md rounded-tr-[3rem] h-full p-4'>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos alias ipsa ipsum harum illo neque. Ipsam voluptate velit inventore ut at, necessitatibus nemo facere, tempore ipsa, aperiam commodi sint!</p>
        </div>
      </div>
    </>
  )
}

export default Hero
