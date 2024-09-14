import React from 'react'
import Button from './Button'
import { fade01, glow06 } from '../assets'
import { ExpertiseData } from '../constants'

const certificates = ExpertiseData[0].certifications[0];

const Certifications = () => {
  return (
    <div className='flex flex-col md:gap-12 gap-8 items-center py-12 justify-center relative overflow-hidden'>
      <img src={fade01} alt="Fade Effect" className='w-full h-full object-cover absolute inset-0 z-10' />
      <img src={glow06} alt="Glow Elipse" className='absolute -z-10 w-[50rem] h-auto' />
      <div className='space-y-4' id='scroll-animation-24'>
        <h1 className='uppercase text-white font-black text-[2rem] lg:text-[5rem] whitespace-nowrap leading-none text-center' id='scroll-animation-'>{certificates.title}</h1>
        <p className='text-white text-center px-[2rem]' dangerouslySetInnerHTML={{ __html: certificates.content }}
        ></p>
      </div>
      <div className='md:space-y-4 space-y-2 overflow-hidden'>
        <div className='aboslute ml-[-10rem] flex md:gap-4 gap-2 md:h-[10rem] h-[4rem] z-0' id='scroll-animation-22'>
          {certificates.images01.map((cert, index) => (
            <img key={index} src={cert.src} alt={`Certification ${index + 1}`} className='h-full w-auto rounded-md border-1 border-white' />
          ))}
        </div>
        <div className='aboslute flex md:gap-4 gap-2 md:h-[10rem] h-[4rem] z-0' id='scroll-animation-23'>
          {certificates.images02.map((cert, index) => (
            <img key={index} src={cert.src} alt={`Certification ${index + 1}`} className='h-full w-auto rounded-md border-1 border-white' />
          ))}
        </div>
      </div>
      <a href={certificates.link} target='_blank' rel='noopener noreferrer' className='z-20'>
        <Button text={certificates.btnText}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
          </svg>
        </Button>
      </a>
    </div>

  )
}

export default Certifications