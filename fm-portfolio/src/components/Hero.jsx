import React from 'react';
import { glow01 } from '../assets'
import Button from '../components/Button'
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
      <div className='lg:pl-[11rem] pl-[1rem] h-full lg:p-6 p-4 flex'>
        <div className='w-[25rem] flex flex-col justify-end lg:items-end items-start pr-4 uppercase' id='scroll-animation-2'>
          {heroData.role.map((role, index) => (
            <h4 key={index} className="text-white">{role}</h4>
          ))}
        </div>
        {/* Right Container */}
        <div className='rounded-md rounded-tr-[2.5rem] h-full p-[1px] bg-border-gradient'>
          <div className='rounded-md rounded-tr-[2.5rem] h-full p-5 bg-[#15131C] flex flex-col justify-between'>
            {/* Top side */}
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:space-y-0 space-y-4'>
              <div>
                <p className='text-white'>Hello World! I am <span className='font-semibold text-indigo-400'>{heroData.name}</span>,  
                {heroData.content}
                </p>
              </div>
              <div className='flex lg:justify-end lg:items-start space-x-4'>
                <Button text={'Download CV'} styles={'hover:bg-[#100E16]'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </Button>
                <a href={`mailto:${contacts.contacts[0].name}`}>
                  <Button text={'Get in touch'} styles={'bg-indigo-600 hover:bg-indigo-700'} round={'rounded-md lg:rounded-tr-[1.5rem]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
            {/* Bottom Side */}
            <div className='flex flex-col items-start uppercase' id='scroll-animation-1'>
              <h4 className='text-white lg:mb-[-3rem] lg:ml-2.5 mb-[-0.5rem]'>Specializing in <span className='text-indigo-400'>web</span></h4>
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
