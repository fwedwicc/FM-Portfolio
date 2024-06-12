import React from 'react'
import Footer from './Footer'
import Button from './Button'
import { glow05 } from '../assets'
import { ContactData } from '../constants'

const Contact = () => {
  const contacts = ContactData[0];

  return (
    <div className='flex justify-center items-center h-full p-[2rem] relative'>
      <div className='h-full w-full grid grid-rows-6 z-20'>
        <div className='row-span-4 rounded-md p-4 text-white'>
          <div className='space-y-4'>
            <div>
              <h1 className='uppercase font-black text-[3rem] lg:text-[9rem] whitespace-nowrap leading-none ml-[4.2rem] lg:ml-[3rem]' id='scroll-animation-18'>Get in touch<span className='text-[#9291DD]'>.</span></h1>
            </div>
            <ul className='space-y-1.5 pb-[0.8rem] scroll-animation-19'>
              <li className='block text-indigo-400 font-extrabold lg:text-[1.2rem] text-[0.9rem] uppercase'>{contacts.name}</li>
              {contacts.contacts.map((contact, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <img src={contact.icon} alt={contact.alt} className='w-4 h-4' />
                  <p>{contact.name}</p>
                </li>
              ))}
            </ul>
            <div className='scroll-animation-19'>
              <Button text={'Say hi'} styles={'bg-indigo-500 flex justify-center items-center gap-3'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className='row-span-2 flex items-end'>
          <Footer />
        </div>
      </div>
      <img src={glow05} alt="Glow eclipse" className='absolute bottom-0 z-10' id='scroll-animation-20' />
    </div>

  )
}

export default Contact
