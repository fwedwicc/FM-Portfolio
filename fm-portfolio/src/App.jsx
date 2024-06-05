import React from 'react'
import { Sidebar, Hero } from './components'

export default function App() {
  return (
    <>
      {/* Sidebar Component */}
      <Sidebar />
      {/* Hero Page */}
      <main className='h-screen bg-grid bg-contain bg-center bg-no-repeat' id='home'>
        <Hero />
      </main>
    </>
  )
}
