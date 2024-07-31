import React from 'react'
import { ExpertiseData } from '../constants'
import Badge from './Badge'

const Skills = () => {

  const techStacks = ExpertiseData[0].techStacks;

  return (
    <div className='flex flex-col lg:gap-6 gap-3 py-8 pt-14'>
      <h1 className='uppercase text-white font-black text-[3rem] lg:text-[7rem] whitespace-nowrap leading-none text-center mb-[3rem]' id='scroll-animation-26'>EXPERTISE</h1>
      <div className='flex justify-center flex-wrap lg:px-80 px-20 items-center gap-2.5 lg:gap-4 my-4 z-10' id='scroll-animation-27'>
        {techStacks.map((stack, index) => (
          <Badge key={index} styles={'lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84]/50 transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36]'}>
            <img src={stack.icon} alt="logo" className='w-7 h-7 lg:w-10 lg:h-10' />
            <div className='absolute lg:text-[16px] text-[10px] bg-[#2A2345] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 rounded-md z-10 opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out' style={{ top: '120%', left: '50%', transform: 'translateX(-50%)' }}>
              {stack.tooltip}
            </div>
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default Skills
