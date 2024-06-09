import React from 'react'
import { bcp } from '../assets';


const Education = () => {
  return (
    <div className='lg:pl-[13.5rem] pl-[2rem] lg:p-6 p-4 flex flex-col gap-[5rem]'>
      <div className='grid grid-cols-8'>
        <div className='col-span-7 p-px rounded-md bg-border-gradient-'>
          <div className='p-4 bg-base rounded-md'>
            <h1 className='uppercase text-white font-black text-[3rem] lg:text-[8rem] whitespace-nowrap leading-none' id='scroll-animation-'>Education</h1>

            <div className='flex gap-12 mt-[5rem]'>
              <img src={bcp} alt="" className='w-auto h-[5rem] lg:h-[14rem]' />

              <div className='space-y-4'>
                <h1 className='uppercase text-white font-black text-[2rem] lg:text-[6rem] whitespace-nowrap leading-none' id='scroll-animation-'>
                  BCP
                </h1>
                <div className='flex flex-wrap gap-6'>
                  <div className='border col-span-1 text-wrap'>
                    <h4>Bestlink College of the Philippines</h4>
                    <p>Senior High School (2019 - 2021)</p>
                    <h4>Bachelor of Science in Information Technology</h4>
                  </div>
                  <div className='border-l-[1px] pl-4 col-span-1 text-wrap'>
                    <p>Senior High School (2019 - 2021)</p>
                    <h4>Badgegsgsgsgs</h4>
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
