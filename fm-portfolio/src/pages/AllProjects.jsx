import React from 'react'
import { motion } from 'framer-motion'
import { FMlogo } from '../assets'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const AllProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className='lg:p-6 p-4 border'>
        <Link to="/home#projects">
          <img src={FMlogo} alt="FM-logo" className="lg:w-[1.5rem] lg:h-[1.5rem] w-[1rem] h-[1rem]" />
        </Link>
        <div className='space-y-4'>
          <h1 className='uppercase text-white font-black text-[3rem] lg:text-[9rem] whitespace-nowrap leading-none text-center' id='scroll-animation-'>Projects</h1>
          <p className='text-white text-center lg:px-[20rem] md:px-[8rem] px-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptate repellat iusto dolor voluptatem voluptatibus porro accusamus architecto sapiente suscipit dicta excepturi nostrum ipsa, quisquam pariatur repellendus modi unde aut.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[4rem]'>
          <Card />
          <Card />
        </div>
      </div>
    </motion.div>
  )
}

export default AllProjects
