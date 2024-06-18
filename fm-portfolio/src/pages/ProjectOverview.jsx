import React from 'react';
import { useParams } from 'react-router-dom';
import { NoPage } from './index'
import { motion } from 'framer-motion';

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
      <h1 className='text-white'>{project.title}</h1>
      <p>{project.desc}</p>
      {project.miro && (
        <iframe
          src={project.miro}
          frameBorder="0"
          scrolling="no"
          allow="fullscreen; clipboard-read; clipboard-write"
          allowFullScreen
          title="Miro Board"
          className='w-[20rem] h-[12rem]'
        ></iframe>
      )}
      {project.figma && (
        <iframe
          src={project.figma}
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          allow="fullscreen; clipboard-read; clipboard-write"
          allowFullScreen
          title="Figma Prototype"
          className='w-[20rem] h-[12rem]'
        ></iframe>
      )}
    </motion.div>
  );
};

export default ProjectOverview;
