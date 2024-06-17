import React from 'react'
import Badge from './Badge'

const Card = () => {
  return (
    <div className='border w-full h-full rounded-lg p-4 flex'>
      <div className='grid grid-cols-8 gap-5'>
        <div className='border col-span-3'>
          <img src="https://placehold.co/300x200" alt="Project Preview" className='object-cover w-full h-full' />
        </div>
        <div className='flex flex-col gap-4 border col-span-5'>
          <div>
            <h1 className='text-white text-[2rem]'>QCU-LMS</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel esse enim facilis debitis! Enim, provident obcaecati nisi mollitia hic.</p>
          </div>
          <div className='space-y-2'>
            <h3 className='text-white font-semibold'>Role:</h3>
            <div className='flex-wrap flex gap-3'>
              <Badge text={'Front-end Developer'} styles={'lg:py-2 lg:px-4 py-1 px-2 text-[12px] lg:text-[16px]'} />
              <Badge text={'UI/UX Designer'} styles={'lg:py-2 lg:px-4 py-1 px-2 text-[12px] lg:text-[16px]'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
