import React from 'react'
import Button from './Button'
import { fade01, glow06 } from '../assets'
import { ExpertiseData } from '../constants'

const certificates = ExpertiseData[0].certifications[0];

const Certifications = () => {
  return (
    <div className='flex flex-col gap-12 items-center py-12 justify-center'>
      <img src={fade01} alt="Fade Effect" className='w-full h-full object-cover object-center absolute z-10' />
      <img src={glow06} alt="Glow Elipse" className='absolute -z-10' />
      <div className='space-y-4' id='scroll-animation-24'>
        <h1 className='uppercase text-white font-black text-[2.5rem] lg:text-[5rem] whitespace-nowrap leading-none text-center' id='scroll-animation-'>{certificates.title}</h1>
        <p className='text-white text-center lg:px-[20rem] md:px-[8rem] px-[2rem]'>{certificates.content}</p>
      </div>
      <div className='space-y-4'>
        <div className='aboslute flex gap-3 lg:h-[12rem] h-[7rem] z-0' id='scroll-animation-22'>
          {certificates.images01.map((cert, index) => (
            <img key={index} src={cert.src} alt={`Certification ${index + 1}`} className='h-full w-auto rounded-sm' />
          ))}
        </div>
        <div className='aboslute flex gap-3 lg:h-[12rem] h-[7rem] z-0' id='scroll-animation-23'>
          {certificates.images02.map((cert, index) => (
            <img key={index} src={cert.src} alt={`Certification ${index + 1}`} className='h-full w-auto rounded-sm' />
          ))}
        </div>
      </div>
      <a href={certificates.link} className='z-20'>
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