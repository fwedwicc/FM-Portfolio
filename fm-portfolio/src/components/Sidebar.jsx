import React, { useState } from 'react';
import logo from '../assets/FM-logo.png';
import { Socials, navLinks } from '../constants';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close menu' : 'Open menu'}
      </button>
      <aside className={`fixed lg:flex w-[12rem] h-screen flex-col py-8 px-8 backdrop-blur-lg lg:bg-transparent justify-between z-10 ${isOpen ? 'flex' : 'hidden'}`}>
        {/* Top Side / Logo & Navigations */}
        <div className='space-y-7'>
          <div className='flex justify-between items-center'>
            <img src={logo} alt="FM-logo" className='lg:w-[1.5rem] lg:h-[1.5rem] w-[1rem] h-[1rem]' />
            <button className='text-white lg:hidden' onClick={() => setIsOpen(!isOpen)}>x</button>
          </div>
          <ul className='text-white text-sm uppercase space-y-1'>
            {navLinks.map((nav, index) => (
              <li key={index}>
                <a href={`#${nav.id}`} className='nav-link'>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Vertical Divider */}
        <div className="border-l-[1px] lg:ml-[10px] ml-[6px] border-[#373357] h-full my-8"></div>
        {/* Bottom Side / Socials */}
        <div className='flex flex-col gap-6'>
          {Socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt="social-icon" className="lg:w-[1.3rem] lg:h-[1.3rem] h-[0.9rem] w-[0.9rem]" />
            </a>
          ))}
        </div>
      </aside >
    </>
  );
};

export default Sidebar;