import React from 'react';
import { motion } from 'framer-motion';
import { FMlogo, grid01, glow07 } from '../assets';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';

const AllProjects = ({ projects }) => {
  useScrollToTop();
  const renderLink = (link) => (
    <Link
      to={`/home#${link.id}`}
      className='lg:text-[16px] text-[12px]'
    >
      {link.title}
    </Link>
  );
  // TODO: GSAP Scroll Animation
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <img src={glow07} alt="Glow eclipse" className='-z-10 fixed' id='scroll-animation-' />
      <img src={grid01} alt="Grid" className='w-full h-full object-contain -z-20 object-center fixed' id='scroll-animation-' />
      <div className='lg:p-8 p-6 z-10'>
        <Link to="/home#projects">
          <img src={FMlogo} alt="FM-logo" className="lg:w-[1.5rem] lg:h-[1.5rem] w-[1rem] h-[1rem]" />
        </Link>
        <div className='space-y-4'>
          <h1 className='uppercase text-white font-black text-[3rem] lg:text-[9rem] whitespace-nowrap leading-none text-center' id='scroll-animation-'>Projects</h1>
          <p className='text-white text-center lg:px-[15rem] md:px-[8rem] px-[2rem]'>The current section provides as a comprehensive exhibition of my innovative and imaginative web development work. My work is a representation of a dedication to both aesthetically pleasing and usefulness; it combines technical expertise with creative design to deliver smooth and interesting user experiences.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[4rem] gap-6'>
          {projects.map(project => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <Card
                title={project.title}
                desc={project.desc}
                img={project.img}
                roles={project.roles}
              />
            </Link>
          ))}
        </div>
        <div className='mt-[7rem]'>
          <Footer link={renderLink} />
        </div>
      </div>
    </motion.div>
  )
}

export default AllProjects;
