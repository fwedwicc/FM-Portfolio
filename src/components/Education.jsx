import React from 'react';
import { AboutData } from '../constants';
import { glow03 } from '../assets';
import Badge from './Badge';
import useGsapAnimations from '../hooks/useGsapAnimations';

// Destructure the specific education data, because i have different styles in each
const { education } = AboutData[0];
const bcpSeniorHigh = education.find(ed => ed.title === 'BCP' && ed.level === 'Senior High School (2019 - 2021)');
const bcpTertiary = education.find(ed => ed.title === 'BCP' && ed.level === 'Tertiary - 1st Year College (2022)');
const qcuTertiary = education.find(ed => ed.title === 'QCU');

const Education = () => {
  useGsapAnimations();
  return (
    <>
      <img src={glow03} alt="Glow eclipse" className='absolute right-0 top-[180vh]' id='scroll-animation-13' />
      <div className='lg:p-6 p-4 flex flex-col gap-[2rem]'>
        <div className='flex justify-center items-center'>
          <div className=' p-px rounded-md bg-border-gradient-4'>
            <div className='p-4 bg-base rounded-md lg:px-12'>
              <h1 className='uppercase text-white font-black text-[2.8rem] lg:text-[6rem] whitespace-nowrap leading-none text-center' id='scroll-animation-11'>Education</h1>
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
    <div className='flex lg:gap-12 gap-5 md:mt-[8rem] mt-[3rem] scroll-animation-12'>
      <img src={bcpSeniorHigh.logo} alt="BCP Logo" className='w-auto h-[3.5rem] lg:h-[14rem]' />
      <div className='lg:space-y-4 space-y-3'>
        <h1 className='uppercase bg-gradient-to-r from-[#B8B7FF] via-[#7977C7] to-[#4A489E] text-transparent bg-clip-text font-black text-[2rem] lg:text-[5rem] whitespace-nowrap leading-none'>
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
    <div className='flex lg:gap-12 gap-5 lg:mt-[3rem] mt-[3rem] scroll-animation-12'>
      <img src={qcuTertiary.logo} alt="QCU Logo" className='w-auto h-[3.5rem] lg:h-[12rem]' />
      <div className='lg:space-y-4 space-y-3'>
        <h1 className='uppercase bg-gradient-to-r from-[#B8B7FF] via-[#7977C7] to-[#4A489E] text-transparent bg-clip-text font-black text-[2rem] lg:text-[4rem] whitespace-nowrap leading-none'>
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
      <Badge text={course} styles={'lg:py-1.5 lg:px-3 py-1 px-2 inline-flex items-center flex-wrap gap-2.5 text-xs lg:text-sm'} />
    </div>
  )
}

export default Education
