import React, { useState } from 'react'
import Footer from './Footer'
import Button from './Button'
import { glow05 } from '../assets'
import { ContactData } from '../constants'

const Contact = () => {
  const contacts = ContactData[0];
  const renderLink = (link) => (
    <a
      href={`#${link.id}`}
      className='lg:text-sm text-[12px]'
    >
      {link.title}
    </a>
  );

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Form Scripts
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='flex justify-center items-center h-full md:p-[2rem] p-4 relative'>
      <div className='h-full w-full grid grid-rows-6 z-20'>
        <div className='row-span-4 rounded-md p-4 text-white'>
          <div className='space-y-4'>
            <div>
              <h1 className='uppercase font-black text-[3rem] lg:text-[9rem] md:text-nowrap text-wrap whitespace-nowrap leading-none md:ml-[3rem]' id='scroll-animation-18'>Get in touch<span className='text-[#9291DD]'>.</span></h1>
            </div>
            <ul className='space-y-1.5 pb-[0.8rem] scroll-animation-19'>
              <li className='block text-indigo-400 font-extrabold lg:text-[1.2rem] text-[0.9rem] uppercase'>{contacts.name}</li>
              <li className='inline-block'>
                <a href={'https://fm-linktree.vercel.app'} target='_blank' className='flex items-center'>
                  <p className='text-indigo-400 underline'>Linktree</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 mt-1 text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              {contacts.contacts.map((contact, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <img src={contact.icon} alt={contact.alt} className='w-4 h-4' />
                  <p>{contact.name}</p>
                </li>
              ))}
            </ul>
            <div className='scroll-animation-19'>
              <Button text={'Say hi'} styles={'hover:bg-[#100E16]'} onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className='row-span-2 flex items-end'>
          <Footer link={renderLink} />
        </div>
      </div>
      <img src={glow05} alt="Glow eclipse" className='absolute bottom-0' id='scroll-animation-20' />
      {/* Contact Form Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-base bg-opacity-70 z-50 transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`bg-base backdrop-blur-md border border-[#59568fbd]/20 rounded-lg md:p-6 p-4 max-w-xl w-full text-center transform transition-transform duration-300 ease-out ${isOpen ? 'scale-100' : 'scale-95'
            }`}
        >
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-3'>
              {/* Name */}
              <label
                htmlFor="name"
                className="relative block overflow-hidden rounded-md text-white border border-[#59568fbd]/20 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Name'
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span
                  className="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#afacdebd] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Name
                </span>
              </label>
              {/* Email */}
              <label
                htmlFor="email"
                className="relative block overflow-hidden rounded-md text-white border border-[#59568fbd]/20 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Name'
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span
                  className="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#afacdebd] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Email
                </span>
              </label>
              {/* Message */}
              <div className='col-span-full'>
                <textarea
                  id="message"
                  className="w-full rounded-lg bg-transparent border-[#59568fbd]/20 align-top text-white placeholder:text-[#afacdebd] shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out sm:text-sm resize-none"
                  rows="2"
                  placeholder="Your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            {/* Preview */}
            <div className="pt-6">
              <p className="italic text-start">
                "Hi there! My name is{" "}
                {formData.name ? (
                  <span className="text-indigo-500">{formData.name}</span>
                ) : (
                  <span className="text-indigo-500">your name</span>
                )}
                , here is my email{" "}
                {formData.email ? (
                  <span className="text-indigo-500">{formData.email}</span>
                ) : (
                  <span className="text-indigo-500">your email </span>
                )}
                , and message{" "}
                {formData.message ? (
                  <span className="text-indigo-500">{formData.message}</span>
                ) : (
                  <span className="text-indigo-500">your message</span>
                )}"
              </p>
            </div>
            <div className='flex justify-end gap-3 pt-6'>
              <Button text={'Cancel'} onClick={closeModal}></Button>
              <Button text={'Submit'} styles={'bg-indigo-600 hover:bg-indigo-700'}></Button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact
