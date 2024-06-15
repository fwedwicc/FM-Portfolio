import React from 'react'
import Button from './Button'
import { fade01, glow06 } from '../assets'
import { ExpertiseData } from '../constants'

const Expertise = () => {
  return (
    <div className='flex flex-col'>
      <GithubStats />
      <Certifications />
    </div>
  )
}

const GithubStats = () => {
  return (
    <div className='flex justify-center items-center py-12 p-4'>
      <div className='flex flex-col lg:gap-6 gap-3' >
        <h1 className='uppercase text-white font-black text-[2.5rem] lg:text-[5rem] whitespace-nowrap leading-none text-center mb-[2rem]' id='scroll-animation-'>Github Stats</h1>
        <div className='flex justify-center items-start lg:gap-6 gap-3 flex-wrap'>
          {/* Language Graph */}
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=fwedwicc&locale=en&hide_title=true&layout=compact&card_width=350&langs_count=8&order=2&bg_color=1C182D&text_color=C1B1FF&border_color=40317A" className='h-[12rem] w-auto' alt="languages graph" />
          {/* Streak Graph */}
          <img src="https://streak-stats.demolab.com?user=fwedwicc&locale=en&theme=transparent&bg_color=1C182D&text_color=C1B1FF&hide_border=true&order=3" className='h-[12rem] w-auto bg-[#1C182D] border-[#40317A] border rounded-lg' alt="streak graph" />
        </div>
        {/* Contribution Graph */}
        <img src="https://github-readme-activity-graph.vercel.app/graph?username=fwedwicc&radius=7&theme=material-palenight&bg_color=1C182D&text_color=ffffff&area=true&order=5&hide_title=true&hide_border=true" className='lg:h-[20rem] h-[11rem] w-auto rounded-2xl' alt="activity-graph graph" />
      </div >
    </div>
  )
}

const certificates = ExpertiseData[0].certifications[0];

const Certifications = () => {
  return (

    <div className='flex flex-col h-screen gap-12 items-center justify-center'>
      <img src={fade01} alt="Compiled Certifications" className='w-full h-full object-cover object-center absolute z-10' id='scroll-animation-' />
      <img src={glow06} alt="Glow Elipse" className='absolute -z-10' />
      <div className='space-y-4'>
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
      <a href={certificates.link}>
        <Button text={certificates.btnText}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
          </svg>
        </Button>
      </a>
    </div>

  )
}

export default Expertise


