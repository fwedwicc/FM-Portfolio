import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { glow05 } from '../assets'

const NoPage = () => {
  const renderLink = (link) => (
    <Link
      to={`/FM-Portfolio/#${link.id}`}
      className='lg:text-sm text-[12px]'
    >
      {link.title}
    </Link>
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className='lg:p-8 p-6 h-screen flex flex-col justify-between bg-grid-2 bg-contain bg-center bg-no-repeat'>
        <div className='flex-grow flex flex-col justify-center items-center z-20'>
          <h1 className='uppercase text-white font-black text-[13rem] lg:text-[25rem] whitespace-nowrap leading-none text-center' id='scroll-animation-'>404</h1>
          <p className='text-white text-center'>Welcome to nowhere!</p>
        </div>
        <div className='z-20'>
          <Footer link={renderLink} />
        </div>
      </div>
      <img src={glow05} alt="Glow eclipse" className='absolute bottom-0 z-10' id='scroll-animation-' />
    </motion.div>
  )
}

export default NoPage
