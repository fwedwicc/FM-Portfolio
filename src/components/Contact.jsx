import React, { useState } from 'react'
import Footer from './Footer'
import Button from './Button'
import { glow05 } from '../assets'
import { ContactData } from '../constants'
import emailjs from 'emailjs-com'

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

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicUser = import.meta.env.VITE_PUBLIC_USER;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setErrors({});
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form Validation
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required.';
    if (!formData.message) formErrors.message = 'Message is required.';
    if (!formData.email) {
      formErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid.';
    }
    return formErrors;
  };

  // Hnadle form logic
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // console.log('Form data submitted:', formData);
      setErrors({});
      setIsOpen(false);
      emailjs
        .send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          publicUser
        )
        .then(
          (result) => {
            console.log(result.text);
            // Simulate form submission
            setTimeout(() => {
              setFormData({
                name: '',
                email: '',
                message: '',
              });
              setIsSuccessOpen(true);
            }, 1000);
          },
          (error) => {
            console.log(error.text);
            alert('An error occurred. Please try again.');
          }
        );

    }
  };

  const closeSuccessModal = () => {
    setIsSuccessOpen(false);
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
          className={`bg-base backdrop-blur-md border border-[#59568fbd]/20 rounded-lg md:p-6 p-4 md:max-w-xl max-w-sm w-full text-center transform transition-transform duration-300 ease-out ${isOpen ? 'scale-100' : 'scale-95'
            }`}
        >
          <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`relative block overflow-hidden rounded-md text-white border border-[#59568fbd]/20 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out ${errors.name ? 'border-yellow-500/30' : 'border-[#59568fbd]/20'}`}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 md:text-sm text-xs" />
                  <span
                    className="absolute start-3 top-3 -translate-y-1/2 md:text-sm text-xs text-[#afacdebd] transition-all peer-placeholder-shown:top-1/2 md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-focus:top-3 md:peer-focus:text-xs md:peer-focus:text-[11px]">
                    Name
                  </span>
                </label>
                {errors.name && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.name}</p>}
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`relative block overflow-hidden rounded-md text-white border border-[#59568fbd]/20 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out ${errors.email ? 'border-yellow-500/30' : 'border-[#59568fbd]/20'}`}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Name'
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 md:text-sm text-xs" />
                  <span
                    className="absolute start-3 top-3 -translate-y-1/2 md:text-sm text-xs text-[#afacdebd] transition-all peer-placeholder-shown:top-1/2 md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-focus:top-3 md:peer-focus:text-xs md:peer-focus:text-[11px]">
                    Email
                  </span>
                </label>
                {errors.email && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className='col-span-full'>
                <textarea
                  id="message"
                  className={`w-full rounded-lg bg-transparent border-[#59568fbd]/20 align-top text-white placeholder:text-[#afacdebd] shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out sm:text-sm md:text-sm text-xs resize-none ${errors.message ? 'border-yellow-500/30' : 'border-[#59568fbd]/20'}`}
                  rows="2"
                  placeholder="Your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.message}</p>}
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
            <div className='flex justify-center gap-3 pt-6'>
              <Button text={'Close'} onClick={closeModal} type="button"></Button>
              <Button text={'Submit'} type="submit" styles={`bg-indigo-600 hover:bg-indigo-700`}></Button>
            </div>
          </form>
        </div>
      </div>
      {/* Success Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-base bg-opacity-70 z-50 transition-opacity duration-300 ease-out ${isSuccessOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`bg-base backdrop-blur-md border border-[#59568fbd]/20 rounded-lg md:p-6 p-4 w-full max-w-xs text-center transform transition-transform duration-300 ease-out ${isSuccessOpen ? 'scale-100' : 'scale-95'
            }`}
        >
          <div className="mb-6 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 text-indigo-500 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <p className='text-md'>Message sent successfully! <br />I'll get back to you soon!</p>
          </div>
          <Button text={'Got it'}
            onClick={closeSuccessModal}
          >
          </Button>
        </div>
      </div>
    </div>

  )
}

export default Contact
