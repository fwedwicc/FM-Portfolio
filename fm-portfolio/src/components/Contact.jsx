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
              <h1 className='uppercase font-black text-[3rem] lg:text-[9rem] whitespace-nowrap leading-none' id='scroll-animation-'>Get in touch<span className='text-[#9291DD]'>.</span></h1>
            </div>
            <ul className='space-y-1.5 pb-[0.8rem]'>
              <li className='block text-indigo-400 font-extrabold lg:text-[1.2rem] text-[0.9rem] uppercase'>{contacts.name}</li>
              {contacts.contacts.map((contact, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <img src={contact.icon} alt={contact.alt} className='w-4 h-4' />
                  <p>{contact.name}</p>
                </li>
              ))}
            </ul>
            <div>
              <Button text={'Drop me a line'} styles={'bg-indigo-500 hover:bg-red-500'}></Button>
            </div>
          </div>
        </div>
        <div className='row-span-2 flex items-end'>
          <Footer />
        </div>
      </div>
      <img src={glow05} alt="Glow eclipse" className='absolute bottom-0 z-10' id='scroll-animation-' />
    </div>

  )
}

export default Contact
