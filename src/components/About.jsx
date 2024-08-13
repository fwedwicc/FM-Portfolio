import React from 'react';
import { glow02 } from '../assets';
import { AboutData } from '../constants';
import Badge from './Badge';
import useGsapAnimations from '../hooks/useGsapAnimations';

const About = () => {
  // GSAP Custom Hook
  useGsapAnimations();
  return (
    <>
      <img src={glow02} alt="Glow eclipse" className='absolute top-[100vh] inset-0' id='scroll-animation-5' />
      <div className='lg:pl-[13.5rem] lg:p-6 p-4 flex flex-col md:gap-[5rem] gap-[3rem]'>
        <WhoAmI />
        <HowItStarted />
        <HowsItGoing />
      </div>
    </>
  )
}

const whoAmIData = AboutData[0].whoAmI[0];

const WhoAmI = () => {
  return (
    <div className='grid grid-cols-8'>
      <div className='lg:col-span-5 col-span-8 p-px rounded-md bg-border-gradient-1'>
        <div className='p-4 bg-base rounded-md'>
          <h1 className='uppercase text-white font-black text-[2rem] lg:text-[9rem] whitespace-nowrap leading-none
            md:ml-[5rem]' id='scroll-animation-4'>Who am <span className='text-[#9291DD]'>i</span>?</h1>
          <div className='my-7 space-y-3 scroll-animation-6'>
            <p>
              I am
              <span className='text-indigo-500 font-semibold uppercase'> {whoAmIData.name}
              </span>
            </p>
            {/* Rendered roles badges */}
            <div className='gap-3 flex flex-wrap justify-start items-center'>
              {whoAmIData.badge.map((badge, index) => (
                <Badge key={index} text={badge.title} styles={'lg:py-1.5 lg:px-3 py-1 px-2 inline-flex items-center text-nowrap gap-2 text-xs lg:text-sm'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-3.5 size-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={badge.svgPath} />
                  </svg>
                </Badge>
              ))}
            </div>
          </div>
          {/* Description */}
          <p className='scroll-animation-6 md:pr-24 leading-relaxed'>{whoAmIData.content}</p>
        </div>
      </div>
    </div>
  )
}

const howItStartedData = AboutData[0].howItStarted[0];

const HowItStarted = () => {
  return (
    <div className='grid grid-cols-8'>
      <div className='lg:col-span-6 lg:col-start-3 col-span-8 p-px rounded-md bg-border-gradient-2'>
        <div className='p-4 bg-base rounded-md space-y-8'>
          <h1 className='uppercase text-white font-black md:text-nowrap text-wrap text-[2rem] lg:text-[5rem] whitespace-nowrap leading-none md:ml-[4rem]' id='scroll-animation-7'>
            How it <span className='text-[#9291DD]'>started</span>?
          </h1>
          {/* Rendered Icons */}
          <div className='flex gap-2 lg:gap-3 my-4 scroll-animation-8'>
            {howItStartedData.icons.map((icon, index) => (
              <div className="relative flex items-center" key={index}>
                <div className="group relative flex items-center">
                  <Badge styles={'lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84] transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36] cursor-help'}>
                    <img src={icon.icon} alt={icon.tooltip} className='w-6 h-6 lg:w-8 lg:h-8' />
                  </Badge>
                  <div className={`absolute text-xs bg-[#221c38] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 z-50 rounded-md opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out top-[120%] left-[50%] transform  translate-x-[-50%] pointer-events-none border border-violet-500/20`}>
                    {icon.tooltip}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Rendered content */}
          <p className='scroll-animation-8 md:pr-24 leading-relaxed'>{howItStartedData.content}</p>
        </div>
      </div>
    </div>
  )
}

const HowsItGoingData = AboutData[0].howsItGoing[0];

const HowsItGoing = () => {
  return (
    <div className='grid grid-cols-8'>
      <div className='lg:col-span-6 col-span-8 p-px rounded-md bg-border-gradient-3'>
        <div className='p-4 bg-base rounded-md space-y-8'>
          <h1 className='uppercase text-white font-black md:text-nowrap text-wrap text-[2rem] lg:text-[5rem] whitespace-nowrap leading-none' id='scroll-animation-9'>
            How's it <span className='text-[#9291DD]'>going</span>?
          </h1>
          {/* Rendered Icons */}
          <div className='flex flex-wrap gap-2 lg:gap-3 my-4 scroll-animation-10'>
            {HowsItGoingData.icons.map((icon, index) => (
              <div className="relative flex items-center" key={index}>
                <div className="group relative flex items-center">
                  <Badge styles={'lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84] transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36] cursor-help'}>
                    <img src={icon.icon} alt={icon.tooltip} className='w-6 h-6 lg:w-8 lg:h-8' />
                  </Badge>
                  <div className={`absolute text-xs bg-[#221c38] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 z-50 rounded-md opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out top-[120%] left-[50%] transform  translate-x-[-50%] pointer-events-none border border-violet-500/20`}>
                    {icon.tooltip}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Rendered content */}
          <p className='scroll-animation-10 md:pr-24 leading-relaxed'>{HowsItGoingData.content}</p>
        </div>
      </div>
    </div>
  )
}


export default About
