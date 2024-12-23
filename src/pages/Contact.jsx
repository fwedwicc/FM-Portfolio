import React, { useState } from 'react'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { glow05 } from '../assets'
import { ContactData } from '../constants'

const Contact = () => {
  const renderLink = (link) => (
    <a
      href={`#${link.id}`}
      className='lg:text-sm text-[12px]'
    >
      {link.title}
    </a>
  );

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
    <div className='flex justify-center items-center md:h-screen h-auto md:p-[2rem] p-4 relative'>
      <div className='h-full w-full grid grid-rows-6 z-20'>
        <div className='row-span-4 rounded-md p-4 text-white'>
          <div className='space-y-4'>
            <div>
              <h1 className='uppercase font-black text-[3rem] lg:text-[9rem] md:text-nowrap text-wrap whitespace-nowrap leading-none' id=''>Let's talk<span className='text-[#9291DD]'>.</span></h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='space-y-2 pb-[0.8rem] '>
                <label className="block text-xl font-medium">
                  Hi there,
                </label>
                <div className='flex items-end gap-2'>
                  <label htmlFor="name" className="block text-xl font-medium">
                    My name is
                  </label>
                  <div className='bg-gradient-to-r from-indigo-500/50 via-indigo-500/10 to-indigo-900/0 rounded-sm'>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full max-w-sm px-2 pb-[1px] border-transparent text-lg  text-white transition duration-300 ease-in-out border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                </div>

                <div className='flex items-end gap-2'>
                  <label htmlFor="email" className="block text-xl font-medium">
                    Here is my email
                  </label>
                  <div className='bg-gradient-to-r from-indigo-500/50 via-indigo-500/10 to-indigo-900/0 rounded-sm'>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full max-w-sm px-2 pb-[1px] border-transparent text-lg  text-white transition duration-300 ease-in-out border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                </div>

                <div className='flex items-end gap-2'>
                  <label htmlFor="message" className="block text-xl font-medium">
                    And message
                  </label>
                  <div className='bg-gradient-to-r from-indigo-500/50 via-indigo-500/10 to-indigo-900/0 rounded-sm'>
                    <input
                      type="text"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full max-w-xl px-2 pb-[1px] border-transparent text-lg  text-white transition duration-300 ease-in-out border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                </div>

              </div>
              <div className=''>
                <Button text={'Send to Frederick'} styles={'hover:bg-[#100E16]'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className='row-span-2 flex items-end'>
          <Footer link={renderLink} />
        </div>
      </div>
      <img src={glow05} alt="Glow eclipse" className='absolute bottom-0' id='' />
    </div>

  )
}

export default Contact
