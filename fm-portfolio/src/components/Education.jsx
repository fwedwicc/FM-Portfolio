import React, { useEffect } from 'react';
import { AboutData } from '../constants';
import { glow03 } from '../assets';
import Badge from './Badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Destructure the specific education data, because i have different styles in each
const { education } = AboutData[0];
const bcpSeniorHigh = education.find(ed => ed.title === 'BCP' && ed.level === 'Senior High School (2019 - 2021)');
const bcpTertiary = education.find(ed => ed.title === 'BCP' && ed.level === 'Tertiary - 1st Year College (2022)');
const qcuTertiary = education.find(ed => ed.title === 'QCU');

const Education = () => {
  useEffect(() => {
    // 'EDUCATION' Title
    gsap.fromTo('#scroll-animation-11',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-11',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 90%',
          end: 'bottom 70%',
        },
        y: 40,
        ease: 'none',
        duration: 3,
      }
    );
    // 'EDUCATION' Content
    gsap.fromTo('.scroll-animation-12',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '.scroll-animation-12',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 80%',
          end: 'bottom 10%',
        },
        y: -50,
        ease: 'none',
        duration: 3,
      }
    );
    // Glow Elipse
    gsap.fromTo('#scroll-animation-13',
      { opacity: 0.1 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-13',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 100%',
          end: 'bottom 10%',
        },
        y: -240,
        ease: 'none',
        duration: 3,
      }
    );


    
  }, []);
  return (
    <>
      <img src={glow03} alt="Glow eclipse" className='absolute right-0 top-[200vh]' id='scroll-animation-13' />
      <div className='lg:p-6 p-4 flex flex-col gap-[5rem]'>
        <div className='flex justify-center items-center'>
          <div className=' p-px rounded-md bg-border-gradient-4'>
            <div className='p-4 bg-base rounded-md mb-8 lg:px-12'>
              <h1 className='uppercase text-white font-black text-[3rem] lg:text-[8rem] whitespace-nowrap leading-none mt-[1rem] lg:mt-10 text-center' id='scroll-animation-11'>Education</h1>
              <BcpEducation />
              <QcuEducation />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const BcpEducation = () => {
  return (
    <div className='flex lg:gap-12 gap-7 lg:mt-[9rem] mt-[7rem] pl-6 scroll-animation-12'>
      <img src={bcpSeniorHigh.logo} alt="BCP Logo" className='w-auto h-[5rem] lg:h-[14rem]' />

      <div className='lg:space-y-4 space-y-3'>
        <h1 className='uppercase bg-gradient-to-r from-[#B8B7FF] via-[#7977C7] to-[#4A489E] text-transparent bg-clip-text font-black text-[3rem] lg:text-[5rem] whitespace-nowrap leading-none'>
          {bcpSeniorHigh.title}
        </h1>
        <div className='flex flex-wrap gap-6'>
          {/* BCP Secondary */}
          <Content container={'text-wrap lg:space-y-3 space-y-2 md:pb-0 md:border-none lg:pb-0 pb-7 lg:border-none border-b-[1px] border-[#373357]'} name={bcpSeniorHigh.name} level={bcpSeniorHigh.level} course={bcpSeniorHigh.course} />
          {/* BCP Tertiary */}
          <Content container={'text-wrap lg:space-y-3 space-y-2 lg:pl-6 lg:border-l-[1px] border-[#373357]'} name={bcpTertiary.name} level={bcpTertiary.level} course={bcpTertiary.course} />
        </div>
      </div>
    </div>
  )
}

const QcuEducation = () => {
  return (
    <div className='flex lg:gap-12 gap-7 lg:mt-[5rem] mt-[3rem] pl-6 scroll-animation-12'>
      <img src={qcuTertiary.logo} alt="QCU Logo" className='w-auto h-[4rem] lg:h-[12rem]' />

      <div className='lg:space-y-4 space-y-3'>
        <h1 className='uppercase bg-gradient-to-r from-[#B8B7FF] via-[#7977C7] to-[#4A489E] text-transparent bg-clip-text font-black text-[3rem] lg:text-[5rem] whitespace-nowrap leading-none'>
          {qcuTertiary.title}
        </h1>
        <div className='flex flex-wrap gap-6'>
          {/* QCU Tertiary */}
          <Content container={'text-wrap lg:space-y-3 space-y-2'} name={qcuTertiary.name} level={qcuTertiary.level} course={qcuTertiary.course} />
        </div>
      </div>
    </div>
  )
}

const Content = ({ name, level, course, container }) => {
  return (
    <div className={`${container}`}>
      <h4 className='font-semibold'>{name}</h4>
      <p className='font-thin italic'>{level}</p>
      <Badge text={course} styles={'lg:py-2 lg:px-4 py-1 px-2 inline-flex items-center flex-wrap gap-2.5 text-[12px] lg:text-[16px]'} />
    </div>
  )
}

export default Education
