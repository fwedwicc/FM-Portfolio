import React from 'react'

const Expertise = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div align="center">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=fwedwicc&locale=en&hide_title=true&layout=compact&card_width=320&langs_count=7&theme=material-palenight&hide_border=true&order=2" className='h-[12rem] w-auto' alt="languages graph" />
        
        <img src="https://streak-stats.demolab.com?user=fwedwicc&locale=en&mode=daily&theme=material-palenight&hide_border=true&border_radius=5&order=3" className='h-[13rem] w-auto'  alt="streak graph" />

        <img src="https://github-readme-activity-graph.vercel.app/graph?username=fwedwicc&radius=7&theme=material-palenight&area=true&order=5&hide_border=true" className='h-[20rem] w-auto' alt="activity-graph graph" />
      </div>
    </div>
  )
}

export default Expertise
