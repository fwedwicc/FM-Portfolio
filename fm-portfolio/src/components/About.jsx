import React from 'react'

const About = () => {
  return (
    <div className='lg:pl-[13.5rem] pl-[2rem] lg:p-6 p-4 flex'>
      <div className='grid grid-cols-8'>
        <div className='col-span-5 p-4 rounded-md'>
          <h1 className='uppercase text-white font-black text-[2.5rem] lg:text-[9rem] whitespace-nowrap leading-none'>Who am i?</h1>

          <div className='my-7 space-y-3'>
            <p>
              I am
              <span className='text-indigo-500 font-semibold uppercase'> Frederick Moreno
              </span>
            </p>
            {/* Professional Roles */}
            <div className='space-x-3'>
              <span className='bg-indigo-500 text-white rounded-[0.4rem] py-2 px-4 bg-opacity-10 border border-indigo-400 border-opacity-30 inline-block'>Front-end Developer</span>
              <span className='bg-indigo-500 text-white rounded-[0.4rem] py-2 px-4 bg-opacity-10 border border-indigo-400 border-opacity-30 inline-block'>UI/UX Designer</span>
              <span className='bg-indigo-500 text-white rounded-[0.4rem] py-2 px-4 bg-opacity-10 border border-indigo-400 border-opacity-30 inline-block'>Traditional Artist</span>
            </div>
          </div>
          {/* Description */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla eligendi sapiente est recusandae, voluptates, officia iusto quaerat molestiae maiores dolores praesentium ab quas maxime nam molestias? Consequuntur, asperiores dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita soluta unde libero consequuntur eos numquam praesentium officia ratione ea, alias tempora fuga cupiditate eveniet a, ipsam consectetur maxime iure!</p>
        </div>
        {/* Image Container in right side */}
        <div className='cols-start-5 col-span-3'>
          
        </div>
      </div>
    </div>
  )
}

export default About
