import React, { useState } from 'react';
import { FMlogo } from '../assets';
import { Socials, navLinks } from '../constants';

const Sidebar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <ToggleButton onClick={toggleSidebar} />
      <aside
        className={`fixed lg:flex w-[12rem] h-screen flex-col py-8 px-8 lg:backdrop-blur-none backdrop-blur-lg justify-between z-20 transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 visible flex' : '-translate-x-full invisible flex'
          } lg:translate-x-0 lg:visible flex`}
      >
        <div className="flex flex-col space-y-7 flex-grow">
          <HeaderLogo onClick={toggleSidebar} />
          <NavLinks activeSection={activeSection} />
        </div>
        <div className="border-l-[1px] lg:ml-[10px] ml-[6px] border-[#373357] h-full my-8"></div>
        <SocialLinks />
      </aside>
    </>
  );
};

const ToggleButton = ({ onClick }) => (
  <button
    className="lg:hidden fixed z-10 ml-[0.8rem] mt-[0.8rem] text-white hover:text-indigo-500 transition duration-300 ease-in-out  bg-transparent backdrop-blur-lg rounded-md"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
  </button>
);

const HeaderLogo = ({ onClick }) => (
  <div className="flex justify-between items-center">
    <img src={FMlogo} alt="FM-logo" className="lg:w-[1.5rem] lg:h-[1.5rem] w-[1rem] h-[1rem]" />
    <button
      className="lg:hidden text-white hover:text-indigo-500 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

const NavLinks = ({ activeSection }) => (
  <ul className="text-white text-sm uppercase space-y-[10px]">
    {navLinks.map((nav, index) => (
      <li key={index}>
        <a
          href={`#${nav.id}`}
          className={`nav-link ${activeSection === nav.id ? 'active-nav-link' : ''}`}
        >
          {nav.title}
        </a>
      </li>
    ))}
  </ul>
);

const SocialLinks = () => (
  <div className="flex flex-col gap-6 mt-auto">
    {Socials.map((social, index) => (
      <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
        <img src={social.icon} alt="social-icon" className="lg:w-[1.3rem] lg:h-[1.3rem] w-[0.9rem] h-[0.9rem] border-[#5a548c] hover:border hover:border-transparent transition duration-300 ease-in-out rounded-[4px] hover:p-[0.5px]" />
      </a>
    ))}
  </div>
);

export default Sidebar;
