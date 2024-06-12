import React from 'react'
import { FooterData } from '../constants'

const Footer = () => {
  const footer = FooterData[0];
  const currentYear = new Date().getFullYear();

  return (
    <div className='grid grid-cols-4 w-full'>
      <div className="col-span-1 flex justify-start items-end">
        <img src={footer.logo} alt="FM Logo" />
      </div>
      <div className="col-span-1 text-white flex justify-center">
        <div className='space-y-[0.3rem]'>
          <h1 className='font-medium text-[1.5rem]'>LINKS</h1>
          {footer.links.map((link, index) => (
            <li
              key={index}
              className='list-none nav-link'
            >
              <a
                href={`#${link.id}`}
                className='text-sm'
              >{link.title}
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className="col-span-1 text-white space-y-[0.2rem] flex justify-center">
        <div className='space-y-[0.3rem]'>
          <h1 className='font-medium text-[1.5rem]'>SOCIALS</h1>
          {footer.socials.map((social, index) => (
            <li
              key={index}
              className='list-none nav-link'
            >
              <a
                href={social.link}
                target='_blank'
                className='text-sm'
              >
                {social.name}
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-end">
        <h2 className='text-white leading-none'>©{currentYear} Frederick Moreno</h2>
      </div>
    </div>
  )
}

export default Footer
