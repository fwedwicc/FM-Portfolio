import React from 'react';
import { glow01 } from '../assets'
import Button from './Button'
import useGsapAnimations from '../hooks/useGsapAnimations';
import { HeroData, ContactData } from '../constants';

const Hero = () => {
  const heroData = HeroData[0];
  const contacts = ContactData[0];
  // GSAP Custom Hook
  useGsapAnimations();
  return (
    <>
      <img src={glow01} alt="Glow eclipse" className='absolute inset-0' id='scroll-animation-3' />
      <div className='lg:pl-[11rem] pl-14 h-full lg:p-6 p-4 flex'>
        <div className='md:flex hidden md:mb-0 mb-[6rem] flex-col justify-end items-end md:pr-4 pr-0 uppercase' id='scroll-animation-2'>
          {heroData.role.map((role, index) => (
            <h4 key={index} className="text-white text-nowrap lg:text-sm text-xs">{role}</h4>
          ))}
        </div>
        {/* Right Container */}
        <div className='rounded-md rounded-tr-[2.5rem] h-full p-[1px] bg-border-gradient'>
          <div className='rounded-md rounded-tr-[2.5rem] h-full p-5 bg-[#15131C] flex flex-col justify-between'>
            {/* Top side */}
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:space-y-0 space-y-4'>
              <div className='z-10'>
                <p className='text-white leading-relaxed'>Hello World! I am <span className='font-semibold text-indigo-400'>{heroData.name}</span>,
                  {heroData.content}
                </p>
              </div>
              <div className='flex lg:justify-end lg:items-start gap-4'>
                <a href={'https://fm-linktree.vercel.app/'} target="_blank" rel="noopener noreferrer">
                  <Button text={'Linktree'} styles={'hover:bg-[#100E16]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 lg:size-4">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </a>
                <a href={`mailto:${contacts.contacts[0].name}`}>
                  <Button text={'Get in touch'} styles={'bg-indigo-600 hover:bg-indigo-700'} round={'rounded-md lg:rounded-tr-[1.5rem]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 lg:size-4">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
            {/* Bottom Side */}
            <div className='flex flex-col items-start uppercase md:mb-0 mb-[6rem]' id='scroll-animation-1'>
              <div className='md:mb-0 mb-[4px] md:hidden flex flex-col justify-end items-start md:pr-4 pr-0 uppercase' id='scroll-animation-2'>
                {heroData.role.map((role, index) => (
                  <h4 key={index} className="text-white text-nowrap lg:text-sm text-xs">{role}</h4>
                ))}
              </div>
              <h4 className='text-white text-xs md:text-sm lg:mb-[-3rem] lg:ml-2.5 mb-[-0.5rem]'>Specializing in <strong className='text-indigo-400'>web</strong></h4>
              <h1 id='hero-heading-parent'>
                <span>DE</span>
                <div id='hero-heading-child'>
                  <div className="word1">veloper</div>
                  <div className="word2">signer</div>
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
