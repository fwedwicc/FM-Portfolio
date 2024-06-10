import React from 'react'
import { bcp, qcu } from '../assets'
import Badge from './Badge'


const Education = () => {
  return (
    <div className='lg:p-6 p-4 flex flex-col gap-[5rem]'>
      <div className='flex justify-center items-center'>
        <div className=' p-px rounded-md bg-border-gradient-4'>
          <div className='p-4 bg-base rounded-md mb-8'>
            <h1 className='uppercase text-white font-black text-[3rem] lg:text-[8rem] whitespace-nowrap leading-none mt-12 text-center' id='scroll-animation-'>Education</h1>

            <div className='flex lg:gap-12 gap-7 lg:mt-[5rem] mt-[3rem] pl-6'>
              <img src={bcp} alt="" className='w-auto h-[5rem] lg:h-[14rem]' />

              <div className='lg:space-y-4 space-y-3'>
                <h1 className='uppercase bg-gradient-to-r from-[#B8B7FF] via-[#7977C7] to-[#4A489E] text-transparent bg-clip-text font-black text-[3rem] lg:text-[6rem] whitespace-nowrap leading-none' id='scroll-animation-'>
                  BCP
                </h1>
                <div className='flex flex-wrap gap-6'>
                  <div className='text-wrap lg:space-y-3 space-y-2 md:pb-0 md:border-none lg:pb-0 pb-7 lg:border-none border-b-[1px] border-[#373357]'>
                    <h4 className='font-semibold'>Bestlink College of the Philippines</h4>
                    <p className='font-thin italic'>Senior High School (2019 - 2021)</p>
                    <Badge text={'Information and Communication Technology'} styles={'lg:py-2 lg:px-4 py-1 px-2 inline-flex items-center flex-wrap gap-2.5 text-[12px] lg:text-[16px]'}></Badge>
                  </div>
                  <div className='text-wrap lg:space-y-3 space-y-2 lg:pl-6 lg:border-l-[1px] border-[#373357]'>
                    <h4 className='font-semibold'>Bestlink College of the Philippines</h4>
                    <p className='font-thin italic'>Tertiary - 1st Year College (2022)</p>
                    <Badge text={'Bachelor of Science in Information Technology'} styles={'lg:py-2 lg:px-4 py-1 px-2 inline-flex items-center flex-wrap gap-2.5 text-[12px] lg:text-[16px]'}></Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex lg:gap-12 gap-7 lg:mt-[5rem] mt-[3rem] pl-6'>
              <img src={qcu} alt="" className='w-auto h-[4rem] lg:h-[12rem]' />

              <div className='lg:space-y-4 space-y-3'>
                <h1 className='uppercase bg-gradient-to-r from-[#B8B7FF] via-[#7977C7] to-[#4A489E] text-transparent bg-clip-text font-black text-[3rem] lg:text-[6rem] whitespace-nowrap leading-none' id='scroll-animation-'>
                  QCU
                </h1>
                <div className='flex flex-wrap gap-6'>
                  <div className='text-wrap lg:space-y-3 space-y-2'>
                    <h4 className='font-semibold'>Quezon City University</h4>
                    <p className='font-thin italic'>Tertiary (2022 - Present)</p>
                    <Badge text={'Bachelor of Science in Information Technology'} styles={'lg:py-2 lg:px-4 py-1 px-2 inline-flex items-center flex-wrap gap-2.5 text-[12px] lg:text-[16px]'}></Badge>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
