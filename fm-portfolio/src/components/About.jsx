import React, { useEffect } from 'react';
import { glow02 } from '../assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // GSAP Scroll animation
    // 'WHO AM I' Container
    gsap.fromTo('#scroll-animation-4', 
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-4',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: true,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        x: -50,
        ease: 'none',
        duration: 3,
      }
    );

  // Glow Elipse
  gsap.to('#scroll-animation-5', {
    scrollTrigger: {
      trigger: '#scroll-animation-5',
      toggleActions: 'restart pause reverse pause',
      scrub: 1,
      markers: false,
      start: 'top 100%',
      end: 'bottom 10%',
    },
    y: -240,
    ease: 'none',
    duration: 3,
  });

}, []);

return (
  <>
    <img src={glow02} alt="Glow eclipse" className='absolute top-[100vh] inset-0' id='scroll-animation-5' />
    <div className='lg:pl-[13.5rem] pl-[2rem] lg:p-6 p-4 flex'>
      <div className='grid grid-cols-8'>
        <div className='col-span-5 p-px rounded-md bg-border-gradient-1'>
          <div className='p-4 bg-base rounded-md'>
            <h1 className='uppercase text-white font-black text-[2.5rem] lg:text-[9rem] whitespace-nowrap leading-none
              ml-[3rem]' id='scroll-animation-4'>Who am i?</h1>
            <div className='my-7 space-y-3'>
              <p>
                I am
                <span className='text-indigo-500 font-semibold uppercase'> Frederick Moreno
                </span>
              </p>
              {/* Professional Roles */}
              <div className='space-x-3 flex justify-start items-center'>
                <span className='bg-[#1C182D] text-[#C1B1FF] rounded-[0.4rem] py-2 px-4 border border-[#40317A] inline-flex items-center justify-center gap-2.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                  Front-end Developer
                </span>
                <span className='bg-[#1C182D] text-[#C1B1FF] rounded-[0.4rem] py-2 px-4 border border-[#40317A] inline-flex items-center justify-center gap-2.5'>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-5">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z" />
                  </svg>

                  UI/UX Designer
                </span>
                <span className='bg-[#1C182D] text-[#C1B1FF] rounded-[0.4rem] py-2 px-4 border border-[#40317A] inline-flex items-center justify-center gap-2.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                  Traditional Artist
                </span>
              </div>
            </div>
            {/* Description */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla eligendi sapiente est recusandae, voluptates, officia iusto quaerat molestiae maiores dolores praesentium ab quas maxime nam molestias? Consequuntur, asperiores dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita soluta unde libero consequuntur eos numquam praesentium officia ratione ea, alias tempora fuga cupiditate eveniet a, ipsam consectetur maxime iure!</p>
          </div>
        </div>
        {/* Image Container in right side */}
        <div className='cols-start-5 col-span-3'>

        </div>
      </div>
    </div>
  </>
)
}

export default About
