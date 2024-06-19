import React from 'react';
import { useParams } from 'react-router-dom';
import { NoPage } from './index'
import { motion } from 'framer-motion';
import { poster01 } from '../assets';
import Badge from '../components/Badge';
import Button from '../components/Button';

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
      <div className='z-20 pt-[11rem] p-12 border'>
        <div className='grid lg:grid-cols-2 grid-cols-1 mb-[4rem] gap-12'>
          <div className='space-y-8 border'>
            <div className='space-y-3'>
              <h1 className='uppercase text-white font-black text-[2.5rem] lg:text-[5rem] whitespace-nowrap leading-none' id='scroll-animation-'>{project.title}</h1>
              <p>{project.content}</p>
            </div>
            <div className='flex gap-4 scroll-animation-'>
              <a href={`${project.githubLink}?tab=repositories`} target='_blank'>
                <Button text={'Live site'} styles={'bg-indigo-600 hover:bg-indigo-700'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                  </svg>
                </Button>
              </a>
              <a href={`${project.githubLink}?tab=repositories`} target='_blank'>
                <Button text={'GitHub repository'} styles={'bg-[#1f1d37] hover:bg-[#1d1928]'}>
                  <svg className='lg:w-5 w-4 lg:h-5 h-4' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
          <div className='border flex flex-col items-start justify-end'>
            <h2 className='text-white mb-2 font-semibold'>Development Tools:</h2>
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
