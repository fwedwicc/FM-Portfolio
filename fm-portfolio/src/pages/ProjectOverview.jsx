import React from 'react';
import { useParams } from 'react-router-dom';
import { NoPage } from './index'
import { motion } from 'framer-motion';
import { poster01 } from '../assets';
import Badge from '../components/Badge';

const ProjectOverview = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(proj => proj.id === projectId);

  if (!project) {
    return <NoPage />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <img src={poster01} alt="Compiled Certifications" className='w-full h-full object-cover object-center absolute -z-10' id='scroll-animation-' />
      <div className='z-20 pt-[9rem] p-12 border'>
        <div className='grid lg:grid-cols-2 grid-cols-1 mb-[4rem]'>
          <div className='space-y-4 border'>
            <h1 className='uppercase text-white font-black text-[2.5rem] lg:text-[5rem] whitespace-nowrap leading-none' id='scroll-animation-'>{project.title}</h1>
            <p>{project.content}</p>
          </div>
          <div className='border'>
            <h2 className='text-white mb-2'>Development Tools:</h2>
            <div className='flex gap-2.5 scroll-animation-'>
              {project.tools.map((icon, index) => (
                <Badge key={index} styles={'lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84]/50 transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36]'}>
                  <img src={icon.icon} alt="icon" className='w-6 h-6 lg:w-8 lg:h-8' />
                  <div className='absolute lg:text-[16px] text-[10px] bg-[#2A2345] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 rounded-md z-10 opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out' style={{ top: '120%', left: '50%', transform: 'translateX(-50%)' }}>
                    {icon.tooltip}
                  </div>
                </Badge>
              ))}
            </div>
          </div>
        </div>
        {project.miro && (
          <iframe
            src={project.miro}
            frameBorder="0"
            scrolling="no"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
            title="Miro Board"
            className='w-full h-[50rem]'
          ></iframe>
        )}
        {project.figma && (
          <iframe
            src={project.figma}
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
            title="Figma Prototype"
            className='w-full h-[50rem]'
          ></iframe>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectOverview;
