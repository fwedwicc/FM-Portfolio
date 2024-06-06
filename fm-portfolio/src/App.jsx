import React, { useEffect, useRef, useState } from 'react';
import { Sidebar, Hero, About } from './components'
import { navLinks } from './constants';

export default function App() {
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
  return (
    <>
      {/* Sidebar Component */}
      <Sidebar activeSection={activeSection} />
      {/* Hero Page */}
      <main ref={(el) => (sectionsRef.current[0] = el)} className='h-screen bg-grid bg-contain bg-center bg-no-repeat' id='home'>
        <Hero />
      </main>
      <main ref={(el) => (sectionsRef.current[1] = el)} className='h-screen' id='about'>
        <About />
      </main>
    </>
  )
}
