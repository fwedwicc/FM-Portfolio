import React from 'react'

const Expertise = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div align="center">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=fwedwicc&locale=en&hide_title=true&layout=compact&card_width=350&langs_count=8&order=2&bg_color=1C182D&text_color=C1B1FF&border_color=40317A" className='h-[12rem] w-auto' alt="languages graph" />

        <img src="https://streak-stats.demolab.com?user=fwedwicc&locale=en&theme=transparent&bg_color=1C182D&text_color=C1B1FF&hide_border=true&order=3" className='h-[13rem] w-auto bg-[#1C182D] border-[#40317A] border' alt="streak graph" />

        <img src="https://github-readme-activity-graph.vercel.app/graph?username=fwedwicc&radius=7&theme=material-palenight&bg_color=1C182D&text_color=ffffff&area=true&order=5&hide_title=true&hide_border=true" className='h-[20rem] w-auto border-[#40317A] border rounded-lg' alt="activity-graph graph" />

        

      </div>
    </div>
  )
}

export default Expertise
