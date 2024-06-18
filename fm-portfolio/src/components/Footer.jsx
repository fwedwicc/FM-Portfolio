import React from 'react';
import { Socials, navLinks, ContactData } from '../constants';
import { FMlogo } from '../assets';

const Footer = ({ link }) => {
  const currentYear = new Date().getFullYear();
  const filterednavLinks = navLinks.slice(0, -1); // Assuming you want to exclude the last link
  const contacts = ContactData[0];

  return (
    <div className='grid grid-cols-4 w-full' id='scroll-animation-21'>
      <div className="col-span-1 flex justify-start items-end">
        <img src={FMlogo} alt="FM Logo" className='lg:w-[2rem] w-[1.4rem] lg:h-[2rem] h-[1.4rem]' />
      </div>
      <div className="col-span-1 text-white flex justify-center">
        <div className='space-y-[0.3rem]'>
          <h1 className='font-medium lg:text-[1.5rem] text-[0.9rem]'>LINKS</h1>
          <ul>
            {filterednavLinks.map((navLink, index) => (
              <li key={index} className='list-none nav-link'>
                {link(navLink)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 text-white space-y-[0.2rem] flex justify-center">
        <div className='space-y-[0.3rem]'>
          <h1 className='font-medium lg:text-[1.5rem] text-[0.9rem]'>SOCIALS</h1>
          <ul>
            {Socials.map((social, index) => (
              <li key={index} className='list-none nav-link'>
                <a
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='lg:text-[16px] text-[12px]'
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-end">
        <h2 className='text-white leading-none lg:text-[16px] text-[10px] text-nowrap'>
          ©{currentYear} {contacts.name}
        </h2>
      </div>
    </div>
  );
};

export default Footer;
