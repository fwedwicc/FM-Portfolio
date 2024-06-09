import React, { useEffect } from 'react';
import { glow02 } from '../assets';
import { AboutData } from '../constants';
import Badge from '../components/Badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // GSAP Scroll animation
    // 'WHO AM I' Title
    gsap.fromTo('#scroll-animation-4',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-4',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        x: -100,
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
    // 'WHO AM I' Content
    gsap.fromTo('.scroll-animation-6',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '.scroll-animation-6',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        ease: 'none',
        duration: 3,
      }
    );
    // 'HOW IT STARTED' Title
    gsap.fromTo('#scroll-animation-7',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-7',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        x: -70,
        ease: 'none',
        duration: 3,
      }
    );
    // 'HOW IT STARTED' Content
    gsap.fromTo('.scroll-animation-8',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '.scroll-animation-8',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 80%',
          end: 'bottom 10%',
        },
        ease: 'none',
        duration: 3,
      }
    );
    // 'HOW'S IT GOING' Title
    gsap.fromTo('#scroll-animation-9',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-9',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        x: 70,
        ease: 'none',
        duration: 3,
      }
    );
    // 'HOW'S IT GOING' Content
    gsap.fromTo('.scroll-animation-10',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '.scroll-animation-10',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 80%',
          end: 'bottom 10%',
        },
        ease: 'none',
        duration: 3,
      }
    );

  }, []);

  return (
    <>
      <img src={glow02} alt="Glow eclipse" className='absolute top-[100vh] inset-0' id='scroll-animation-5' />
      <div className='lg:pl-[13.5rem] pl-[2rem] lg:p-6 p-4 flex flex-col gap-[5rem]'>
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
      <div className='lg:col-span-5 col-span-7 p-px rounded-md bg-border-gradient-1'>
        <div className='p-4 bg-base rounded-md'>
          <h1 className='uppercase text-white font-black text-[3rem] lg:text-[9rem] whitespace-nowrap leading-none
            ml-[5rem]' id='scroll-animation-4'>Who am <span className='text-[#9291DD]'>i</span>?</h1>
          <div className='my-7 space-y-3 scroll-animation-6'>
            <p>
              I am
              <span className='text-indigo-500 font-semibold uppercase'> {whoAmIData.name}
              </span>
            </p>
            {/* Rendered roles badges */}
            <div className='space-x-3 flex justify-start items-center'>
              {whoAmIData.badge.map((badge, index) => (
                <Badge key={index} text={badge.title} styles={'lg:py-2 lg:px-4 py-1 px-2 inline-flex items-center flex-wrap gap-2.5 text-[12px] lg:text-[16px]'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d={badge.svgPath} />
                  </svg>
                </Badge>
              ))}
            </div>
          </div>
          {/* Description */}
          <p className='scroll-animation-6'>{whoAmIData.content}</p>
        </div>
      </div>
    </div>
  )
}

const howItStartedData = AboutData[0].howItStarted[0];

const HowItStarted = () => {
  return (
    <div className='grid grid-cols-8'>
      <div className='lg:col-span-6 lg:col-start-3 col-span-7 p-px rounded-md bg-border-gradient-2'>
        <div className='p-4 bg-base rounded-md space-y-8'>
          <h1 className='uppercase text-white font-black text-[2rem] lg:text-[5rem] whitespace-nowrap leading-none ml-[4rem]' id='scroll-animation-7'>
            How it <span className='text-[#9291DD]'>started</span>?
          </h1>
          {/* Rendered Icons */}
          <div className='flex gap-2.5 lg:gap-4 my-4 scroll-animation-8'>
            {howItStartedData.icons.map((icon, index) => (
              <Badge styles={'lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84]/50 transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36]'}>
                <img key={index} src={icon.icon} alt="icon" className='w-7 h-7 lg:w-10 lg:h-10' />
                <div className='absolute lg:text-[16px] text-[10px] bg-[#2A2345] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 rounded-md z-10 opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out' style={{ top: '120%', left: '50%', transform: 'translateX(-50%)' }}>
                  {icon.tooltip}
                </div>
              </Badge>
            ))}
          </div>
          {/* Rendered content */}
          <p className='scroll-animation-8'>{howItStartedData.content}</p>
        </div>
      </div>
    </div>
  )
}

const HowsItGoingData = AboutData[0].howsItGoing[0];

const HowsItGoing = () => {
  return (
    <div className='grid grid-cols-8'>
      <div className='lg:col-span-6 col-span-7 p-px rounded-md bg-border-gradient-3'>
        <div className='p-4 bg-base rounded-md space-y-8'>
          <h1 className='uppercase text-white font-black text-[2rem] lg:text-[5rem] whitespace-nowrap leading-none' id='scroll-animation-9'>
            How's it <span className='text-[#9291DD]'>going</span>?
          </h1>
          {/* Rendered Icons */}
          <div className='flex flex-wrap gap-2.5 lg:gap-4 my-4 scroll-animation-10'>
            {HowsItGoingData.icons.map((icon, index) => (
              <Badge styles={'lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84]/50 transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36]'}>
                <img key={index} src={icon.icon} alt="icon" className='w-7 h-7 lg:w-10 lg:h-10' />
                <div className='absolute lg:text-[16px] text-[10px] bg-[#2A2345] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 rounded-md z-10 opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out' style={{ top: '120%', left: '50%', transform: 'translateX(-50%)' }}>
                  {icon.tooltip}
                </div>
              </Badge>
            ))}
          </div>
          {/* Rendered content */}
          <p className='scroll-animation-10'>{HowsItGoingData.content}</p>
        </div>
      </div>
    </div>
  )
}


export default About
