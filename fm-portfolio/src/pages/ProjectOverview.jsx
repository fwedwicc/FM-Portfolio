import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectOverview = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(proj => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
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
    </div>
  );
};

export default ProjectOverview;
