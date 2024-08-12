import React from 'react';
import { useParams } from 'react-router-dom';
import { NoPage } from './index'
import { motion } from 'framer-motion';
import { FMlogo, glow05 } from '../assets';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useScrollToTop from '../hooks/useScrollToTop';


const ProjectOverview = ({ projects }) => {
  useScrollToTop();
  const { projectId } = useParams();
  const project = projects.find(proj => proj.id === projectId);
  const renderLink = (link) => (
    <Link
      to={`/FM-Portfolio#${link.id}`}
      className='lg:text-sm text-[12px]'
    >
      {link.title}
    </Link>
  );

  if (!project) {
    return <NoPage />;
  }

  // TODO: GSAP Scroll Animation
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <img src={project.poster} alt="Compiled Certifications" className='w-full h-full object-cover object-center absolute -z-10' id='scroll-animation-' />
      <div className='z-20 p-12 relative'>
        <Link to="/FM-Portfolio/all-projects">
          <img src={FMlogo} alt="FM-logo" className="lg:w-[1.5rem] lg:h-[1.5rem] w-[1rem] h-[1rem]" />
        </Link>
        <div className='lg:pt-[11rem] pt-[9rem]'>
          {/* Header */}
          <div className='grid lg:grid-cols-2 grid-cols-1 mb-[4rem] lg:gap-12 gap-8'>
            <div className='lg:space-y-8 space-y-5'>
              <div className='space-y-3'>
                <h1 className='text-white font-black text-[1.5rem] lg:text-[3rem] whitespace-nowrap leading-none' id='scroll-animation-'>{project.title}</h1>
                <p>{project.content}</p>
              </div>
              <div className='flex gap-4 scroll-animation-'>
                <a href={project.siteLink} target='_blank'>
                  <Button text={'Live site'} styles={'bg-indigo-600 hover:bg-indigo-700'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </a>
                <a href={project.githubLink} target='_blank'>
                  <Button text={'GitHub repository'} styles={'bg-[#1f1d37] hover:bg-[#1d1928]'}>
                    <svg className='lg:w-5 w-4 lg:h-5 h-4' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
            <div className='flex flex-col items-start justify-end gap-6'>
              {/*  */}
              <div>
                <h2 className='text-white mb-3 font-semibold text-[12px] lg:text-sm'>Project category:</h2>
                <div className='flex flex-wrap gap-2.5 scroll-animation-'>
                  {project.category.map((category, index) => (
                    <Badge key={index} text={category} styles={'g:py-1.5 lg:px-3 py-1 px-2 text-xs lg:text-sm text-nowrap bg-opacity-50 backdrop-blur-md'} />
                  ))}
                </div>
              </div>
              {/*  */}
              <div>
                <h2 className='text-white mb-3 font-semibold text-[12px] lg:text-sm'>Technologies and Tools:</h2>
                <div className='flex flex-wrap gap-2.5 scroll-animation-'>
                  {project.tools.map((icon, index) => (
                    <div className="relative flex items-center" key={index}>
                      <div className="group relative flex items-center">
                        <Badge styles={'lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84] transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36] cursor-help'}>
                          <img src={icon.icon} alt={icon.tooltip} className='w-6 h-6 lg:w-8 lg:h-8' />
                        </Badge>
                        <div className={`absolute text-xs bg-[#221c38] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 z-50 rounded-md opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out top-[120%] left-[50%] transform  translate-x-[-50%] pointer-events-none border border-violet-500/20`}>
                          {icon.tooltip}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className='grid lg:grid-cols-7 grid-cols-1 gap-6'>
            {/* Visuals */}
            <div className='md:col-span-5 col-span-1 ring-[1px] rounded-[18px] ring-[#221c38] border-[0.5rem] relative h-[40rem] border-[#191529]/30'>
              <img src={project.img} alt="" className='object-cover absolute w-full h-full rounded-[14px]' />
            </div>
            {/* Details */}
            <div className='md:col-span-2 col-span-1 border flex flex-col gap-6'>
              {/* Header */}
              <div>
                <h4 className='font-semibold text-lg'>{project.title}</h4>
                <p className='font-thin italic text-[#a297c5]'>{project.date}</p>
              </div>
              {/* Badges */}
              <div>
                <h2 className='text-white mb-2 font-semibold text-[12px] lg:text-sm'>Status:</h2>
                {project.status === 'Finished' ? (
                  <Badge text="Finished" styles={'g:py-1.5 lg:px-3 py-1 px-2 text-xs text-nowrap bg-opacity-50 backdrop-blur-md border-green-500/30 text-green-400 bg-green-800/10'} />
                ) : project.status === 'Work in progress' ? (
                  <Badge text="Work in progress" styles={'g:py-1.5 lg:px-3 py-1 px-2 text-xs text-nowrap bg-opacity-50 backdrop-blur-md border-blue-500/30 text-blue-400 bg-blue-800/10'} />
                ) : (
                  <Badge text="Discontinued/On-hold" styles={'g:py-1.5 lg:px-3 py-1 px-2 text-xs text-nowrap bg-opacity-50 backdrop-blur-md border-yellow-500/30 text-yellow-400 bg-yellow-800/10'} />
                )}
              </div>
              {/* Contributors */}
              <div className='space-y-1.5'>
                <h2 className='text-white mb-3 font-semibold text-[12px] lg:text-sm'>Contributor/s:</h2>
                <div className='flex flex-wrap md:flex-col flex-row gap-3'>
                  {project.contributor.map((contributor, index) => (
                    <div className='flex items-start gap-4' key={index}>
                      <img className="size-10 p-1 rounded-full ring-2 ring-indigo-500" src={contributor.profile} alt={`${contributor.name} Avatar`} />
                      <div>
                        <p>{contributor.name}</p>
                        <p className='text-[#a297c5] text-xs'>{contributor.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
              <p className='pt-3'>{project.summary}</p>
            </div>
          </div>
          <div className='mt-[5rem] z-10'>
            <Footer link={renderLink} />
          </div>
          <img src={glow05} alt="Glow eclipse" className='absolute bottom-0 -z-10' id='scroll-animation-' />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectOverview;
