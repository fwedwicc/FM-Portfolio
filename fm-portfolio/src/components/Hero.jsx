import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { glow } from '../assets'
import Button from '../components/Button'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // GSAP Scroll animations
    // Heading Typography
    gsap.to('#scroll-animation-1', {
      scrollTrigger: {
        trigger: '#scroll-animation-1',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 60%',
        end: 'bottom 10%',
      },
      y: -100,
      opacity: 0,
      ease: 'none',
      duration: 3,
    });

    // Roles Text
    gsap.to('#scroll-animation-2', {
      scrollTrigger: {
        trigger: '#scroll-animation-2',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top -10%',
        end: 'bottom 10%',
      },
      y: -290,
      opacity: 0,
      ease: 'none',
      duration: 3,
    });

    // Glow Elipse
    gsap.to('#scroll-animation-3', {
      scrollTrigger: {
        trigger: '#scroll-animation-3',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top -10%',
        end: 'bottom 10%',
      },
      y: 240,
      opacity: 0,
      ease: 'none',
      duration: 3,
    });

  }, []);

  return (
    <>
      <img src={glow} alt="Glow eclipse" className='absolute inset-0' id='scroll-animation-3' />
      <div className='lg:pl-[11rem] pl-[1rem] h-full lg:p-6 p-4 flex'>
        <div className='w-[25rem] flex flex-col justify-end lg:items-end items-start pr-4 uppercase' id='scroll-animation-2'>
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
              <div className='flex lg:justify-end lg:items-start space-x-4'>
                <Button text={'Download CV'} styles={'z-10 bg-transparent border border-[#373357] text-[#cabef4] flex justify-center items-center gap-4'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </Button>
                <Button text={'Get in touch'} styles={'lg:rounded-tr-[1.5rem] sm:rounded-md md:rounded-md z-10 text-white bg-indigo-600'}></Button>
              </div>
            </div>
            {/* Bottom Side */}
            <div className='flex flex-col items-start uppercase' id='scroll-animation-1'>
              <h4 className='text-white lg:mb-[-3rem] lg:ml-2.5 mb-[-0.5rem]'>Specializing in <span className='text-indigo-400'>web</span></h4>
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
