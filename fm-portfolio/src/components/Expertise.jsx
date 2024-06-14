import React from 'react'

const Expertise = () => {
  return (
    <div className='lg:p-6 p-4 flex flex-col gap-[2rem]'>
      <div className='flex justify-center items-center'>

        < div className='flex flex-col gap-6' >
          <h1 className='uppercase text-white font-black text-[2.5rem] lg:text-[5rem] whitespace-nowrap leading-none text-center mb-[2rem]' id='scroll-animation-'>Github Stats</h1>
          <div className='flex justify-center items-start gap-6 flex-wrap'>
            {/* Language Graph */}
            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=fwedwicc&locale=en&hide_title=true&layout=compact&card_width=350&langs_count=8&order=2&bg_color=1C182D&text_color=C1B1FF&border_color=40317A" className='h-[12rem] w-auto' alt="languages graph" />
            {/* Streak Graph */}
            <img src="https://streak-stats.demolab.com?user=fwedwicc&locale=en&theme=transparent&bg_color=1C182D&text_color=C1B1FF&hide_border=true&order=3" className='h-[12rem] w-auto bg-[#1C182D] border-[#40317A] border rounded-lg' alt="streak graph" />
          </div>
          {/* Contribution Graph */}
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=fwedwicc&radius=7&theme=material-palenight&bg_color=1C182D&text_color=ffffff&area=true&order=5&hide_title=true&hide_border=true" className='lg:h-[20rem] h-[13rem] w-auto rounded-lg' alt="activity-graph graph" />
        </div >



      </div>
    </div>
  )
}

export default Expertise


