import React from 'react'
import { FooterData } from '../constants'

const Footer = () => {
  const footer = FooterData[0];
  const currentYear = new Date().getFullYear();

  return (
    <div className='grid grid-cols-4 w-full' id='scroll-animation-21'>
      <div className="col-span-1 flex justify-start items-end">
        <img src={footer.logo} alt="FM Logo" className='lg:w-[2rem] w-[1.4rem] lg:h-[2rem] h-[1.4rem]' />
      </div>
      <div className="col-span-1 text-white flex justify-center">
        <div className='space-y-[0.3rem]'>
          <h1 className='font-medium lg:text-[1.5rem] text-[0.9rem]'>LINKS</h1>
          {footer.links.map((link, index) => (
            <li
              key={index}
              className='list-none nav-link'
            >
              <a
                href={`#${link.id}`}
                className='lg:text-[16px] text-[12px]'
              >{link.title}
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className="col-span-1 text-white space-y-[0.2rem] flex justify-center">
        <div className='space-y-[0.3rem]'>
          <h1 className='font-medium lg:text-[1.5rem] text-[0.9rem]'>SOCIALS</h1>
          {footer.socials.map((social, index) => (
            <li
              key={index}
              className='list-none nav-link'
            >
              <a
                href={social.link}
                target='_blank'
                className='lg:text-[16px] text-[12px]'
              >
                {social.name}
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-end">
        <h2 className='text-white leading-none lg:text-[16px] text-[10px] text-nowrap'>©{currentYear} Frederick Moreno</h2>
      </div>
    </div>
  )
}

export default Footer
