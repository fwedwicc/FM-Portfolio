import React from 'react';
import logo from '../assets/FM-logo.png';
import { Socials } from '../constants';

const Sidebar = () => {
  return (
    <div className='flex w-[7.5rem] h-screen flex-col py-8 px-8 justify-between'>
      {/* Top Side / Logo & Navigations */}
      <div className='space-y-7'>
        <img src={logo} alt="FM-logo" className='w-[1.5rem] h-[1.5rem]' />
        <ul className='text-white text-sm space-y-1'>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORKS</li>
          <li>CONTACT</li>
          <li>SOCIALS</li>
        </ul>
      </div>
      {/* Vertical Divider */}
      <div className="border-l-[1px] ml-[10px] border-gray-600 h-full my-8"></div>
      {/* Bottom Side / Socials */}
      <div className='flex flex-col gap-6'>
        {Socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt="social-icon" className="w-[1.3rem] h-[1.3rem]" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
