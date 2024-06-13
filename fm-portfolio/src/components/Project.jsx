import React from 'react'
import Badge from './Badge'
import { ProjectData } from '../constants'
import Button from './Button'
import { compiledProjects } from '../assets'

const Project = () => {
  const project = ProjectData[0];

  return (
    <>
    <img src={compiledProjects} alt="Compiled Projects" className='w-full h-full object-cover object-center absolute' id='scroll-animation-14' />
      <div className='lg:pl-[13.5rem] pl-[2rem] flex h-full'>
        <div className='flex h-full items-center'>
          <div className='grid grid-cols-8'>
            <div className='lg:col-span-4 md:col-span-4 col-span-7 p-px space-y-[1.5rem] z-10'>
              <h1 className='uppercase text-white font-black text-[3rem] lg:text-[7rem] whitespace-nowrap leading-none ml-[4rem]' id='scroll-animation-15'>{project.title}</h1>
              {/* Rendered roles badges */}
              <div className='space-x-3 flex justify-start items-center scroll-animation-16'>
                {project.badge.map((badge, index) => (
                  <Badge key={index} text={badge.title} styles={'lg:py-2 lg:px-4 py-1 px-2 inline-flex items-center text-nowrap gap-2.5 text-[12px] lg:text-[16px] bg-[#211F4B] border-[#574699]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d={badge.svgPath} />
                    </svg>
                  </Badge>
                ))}
              </div>
              <p className='text-white scroll-animation-16'>{project.content}</p>
              <div className='flex gap-3 scroll-animation-16'>
                <Button text={'View all'} styles={'bg-indigo-600 hover:bg-indigo-700'}>
                  <svg className="lg:w-5 w-4 lg:h-5 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </Button>
                <Button text={'View on GitHub'} styles={'bg-[#1f1d37] hover:bg-[#1d1928]'}>
                  <svg className='lg:w-5 w-4 lg:h-5 h-4' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Project
