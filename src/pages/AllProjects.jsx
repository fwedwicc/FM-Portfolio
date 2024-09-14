import React from 'react';
import { motion } from 'framer-motion';
import { FMlogo, grid01, glow07 } from '../assets';
import { defaultThumbnail } from '../assets/banners';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';
import Alert from '../components/Alert';

const AllProjects = ({ projects }) => {
  useScrollToTop();
  const renderLink = (link) => (
    <Link
      to={`/FM-Portfolio#${link.id}`}
      className='lg:text-sm text-[12px]'
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
      {/* Temporary Alert */}
      <Alert />
      <img src={glow07} alt="Glow eclipse" className='-z-10 fixed' id='scroll-animation-' />
      <img src={grid01} alt="Grid" className='w-full h-full object-contain -z-20 object-center fixed' id='scroll-animation-' />
      <div className='lg:p-8 p-6 z-10'>
        <Link to="/FM-Portfolio/#projects">
          <img src={FMlogo} alt="FM-logo" className="lg:w-[1.5rem] lg:h-[1.5rem] w-[1rem] h-[1rem]" />
        </Link>
        <div className='gap-4 md:mt-0 mt-12 flex flex-col justify-center items-center'>
          <h1 className='uppercase text-white font-black text-[3rem] lg:text-[9rem] whitespace-nowrap leading-none text-center' id='scroll-animation-'>Projects</h1>
          <p className='text-white text-center w-full lg:max-w-3xl max-w-[40rem]'>This section provides as a comprehensive exhibition of my innovative and imaginative web development work. These works are a representation of a dedication to both aesthetically pleasing and usefulness; combining my technical skills with a touch of creativity to deliver smooth and enjoyable user experiences.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[4rem] gap-6 md:px-24'>
          {projects.map(project => (
            <Link key={project.id} to={`/FM-Portfolio/all-projects/${project.id}`}>
              <Card
                title={project.title}
                desc={project.desc}
                img={project.img ? project.img : defaultThumbnail}
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
