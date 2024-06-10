import React from 'react'
import { Sidebar, Hero, About, Education } from './components'
import useLenisScroll from './hooks/useLenisScroll';
import useActivateLink from './hooks/useActivateLink';

export default function App() {
  // Navigation LInks Activation
  const { sectionsRef, activeSection } = useActivateLink();
  // Custom hook for lenis smooth scroll
  useLenisScroll();
  
  return (
    <>
      {/* Sidebar Component */}
      <Sidebar activeSection={activeSection} />
      {/* Hero/Home Section */}
      <main ref={(el) => (sectionsRef.current[0] = el)} className='h-screen bg-grid-1 bg-contain bg-center bg-no-repeat' id='home'>
        <Hero />
      </main>
      {/* About Section */}
      <section ref={(el) => (sectionsRef.current[1] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat' id='about'>
        <About />
      </section>
      {/* Education Section */}
      <section ref={(el) => (sectionsRef.current[2] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat' id='about'>
        <Education />
      </section>
    </>
  )
}
