import React from 'react'
import { motion } from 'framer-motion'

const AllProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className='text-white text-3xl'>All Projects</h1>
    </motion.div>
  )
}

export default AllProjects
