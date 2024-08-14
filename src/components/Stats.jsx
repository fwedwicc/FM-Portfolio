import React from 'react'
import { glow02 } from '../assets'

const Stats = () => {
  return (
    <div className='relative'>
      <img src={glow02} alt="Glow eclipse" className='absolute top-[-50vh] inset-0' id='scroll-animation-25' />
      <div className='flex flex-col lg:gap-6 gap-3 py-12' id='scroll-animation-28'>
        <div className='flex justify-center items-start lg:gap-6 gap-3 flex-wrap px-4'>
          {/* Language Graph */}
          <div className='flex flex-col gap-3'>
            <h4 className='font-semibold lg:text-left text-center'>Most Used Languages</h4>
            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=fwedwicc&locale=en&hide_title=true&layout=compact&card_width=350&langs_count=8&order=2&bg_color=1C182D&text_color=C1B1FF&border_color=40317A" className='lg:h-[12rem] h-[8rem] w-auto' alt="languages graph" />
          </div>
          {/* Streak Graph */}
          <div className='flex flex-col gap-3'>
            <h4 className='font-semibold lg:text-left text-center'>Streaks</h4>
            <img src="https://streak-stats.demolab.com?user=fwedwicc&theme=material-palenight&currStreakNum=C1B1FF&background=1C182D&border=40317A&currStreakLabel=C1B1FF&fire=F1E05A&ring=C693EA&dates=C1B1FF&sideNums=C1B1FF&sideLabels=C1B1FF&stroke=AF84FF36" className='lg:h-[12rem] h-[8rem] w-auto' alt="streak graph" />
          </div>
        </div>
        {/* Contribution Graph */}
        <div className='flex flex-col gap-3'>
          <h4 className='font-semibold text-center'>Contribution Graph</h4>
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=fwedwicc&radius=7&theme=material-palenight&bg_color=15131C&text_color=ffffff&area=true&order=5&hide_title=true&hide_border=true" className='lg:h-[20rem] h-[7rem] w-auto rounded-2xl' alt="activity-graph graph" />
        </div>
      </div>
    </div>
  )
}

export default Stats


