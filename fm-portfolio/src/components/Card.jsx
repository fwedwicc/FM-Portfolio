import React from 'react';
import Badge from './Badge';

const Card = ({ title, desc, img, roles = [] }) => {
  return (
    <div className='border w-full h-full rounded-lg p-4 flex'>
      <div className='grid grid-cols-8 gap-5'>
        <div className='border col-span-3'>
          <img src={img} alt={title} className='object-cover w-full h-full rounded-lg' />
        </div>
        <div className='flex flex-col gap-4 border col-span-5'>
          <div>
            <h1 className='text-white text-[2rem]'>{title}</h1>
            <p>{desc}</p>
          </div>
          <div className='space-y-2'>
            <h3 className='text-white font-semibold'>Roles:</h3>
            <div className='flex-wrap flex gap-3'>
              {roles.map((role, index) => (
                <Badge key={index} text={role} styles={'lg:py-2 lg:px-4 py-1 px-2 text-[12px] lg:text-[16px]'} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
