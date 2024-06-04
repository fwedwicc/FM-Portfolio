import React from 'react'
import { Sidebar, Hero } from './components'

export default function App() {
  return (
    <>
      {/* Sidebar Component */}
      <aside className='fixed flex w-[7.5rem] h-screen flex-col py-8 px-8 justify-between z-10'>
        <Sidebar />
      </aside>
      {/* Hero Page */}
      <main className='h-screen bg-grid bg-cover bg-center' id='home'>
        <Hero />
      </main>
    </>
  )
}
