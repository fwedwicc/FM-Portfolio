import React from 'react'
import { Sidebar, Hero } from './components'

export default function App() {
  return (
    <>
      {/* Sidebar Component */}
      <div className='fixed flex w-[7.5rem] h-screen flex-col py-8 px-8 justify-between'>
        <Sidebar />
      </div>
      {/* Hero Page */}
      <div className='h-screen pl-[11rem]'>
        <Hero />
      </div>
    </>
  )
}
