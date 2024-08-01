import React from 'react';
import Badge from './Badge';

const Card = ({ title, desc, img, roles = [] }) => {
  return (
    <div className='w-full h-full rounded-lg p-4 flex hover:shadow-2xl hover:shadow-[#412F84]/20 border border-[#221c3d] transition-all duration-300 ease-in-out hover:border-[#6C59B9] bg-base/70 hover:bg-[#191723]/70'>
      <div className='grid grid-cols-8 gap-7'>
        <div className='col-span-3'>
          <img src={img} alt={title} className='object-cover w-full h-full rounded-[0.3rem]' />
        </div>
        <div className='flex flex-col gap-4 col-span-5'>
          <div>
            <h1 className='text-white text-[1.5rem]'>{title}</h1>
            <p className='text-sm'>{desc}</p>
          </div>
          <div className='space-y-2'>
            <h3 className='text-white font-semibold text-sm'>Roles:</h3>
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
