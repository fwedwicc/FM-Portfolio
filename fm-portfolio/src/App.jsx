import React, { useEffect, useRef, useState } from 'react'
import { Sidebar, Hero, About, Education } from './components'
import Lenis from 'lenis'

export default function App() {
  // Navigation LInks Activation
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Lenis Library for smooth scroll
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  return (
    <>
      {/* Sidebar Component */}
      <Sidebar activeSection={activeSection} />
      {/* Hero Page */}
      <main ref={(el) => (sectionsRef.current[0] = el)} className='h-screen bg-grid-1 bg-contain bg-center bg-no-repeat' id='home'>
        <Hero />
      </main>
      <section ref={(el) => (sectionsRef.current[1] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat' id='about'>
        <About />
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat' id='about'>
        <Education />
      </section>
    </>
  )
}
