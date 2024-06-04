import React from 'react';
import logo from '../assets/FM-logo.png';
import { Socials } from '../constants';

const Sidebar = () => {
  return (
    <>
      {/* Top Side / Logo & Navigations */}
      <div className='space-y-7'>
        <img src={logo} alt="FM-logo" className='w-[1.5rem] h-[1.5rem]' />
        <ul className='text-white text-sm uppercase space-y-1'>
          <li>
            <button className=''>HOME</button>
          </li>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
          <li>Socials</li>
        </ul>
      </div>
      {/* Vertical Divider */}
      <div className="border-l-[1px] ml-[10px] border-[#373357] h-full my-8"></div>
      {/* Bottom Side / Socials */}
      <div className='flex flex-col gap-6'>
        {Socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt="social-icon" className="w-[1.3rem] h-[1.3rem]" />
          </a>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
