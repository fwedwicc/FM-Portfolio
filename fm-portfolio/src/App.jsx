import React from 'react';
import { Sidebar, Hero, About, Education, Skills, Project, Contact, Certifications, Stats } from './components';
import useLenisScroll from './hooks/useLenisScroll';
import useActivateLink from './hooks/useActivateLink';

export default function App() {
  // Navigation Links Activation
  const { sectionsRef, activeSection } = useActivateLink();
  // Custom hook for lenis smooth scroll
  useLenisScroll();

  return (
    <>
      {/* Sidebar Component */}
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          activeSection === 'contact' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Sidebar activeSection={activeSection} />
      </div>
      {/* Hero/Home Section */}
      <main ref={(el) => (sectionsRef.current[0] = el)} className='h-screen bg-grid-1 bg-contain bg-center bg-no-repeat' id='home'>
        <Hero />
      </main>
      {/* About Section */}
      <section ref={(el) => (sectionsRef.current[1] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat' id='about'>
        <About />
      </section>
      {/* Education Section */}
      <section ref={(el) => (sectionsRef.current[2] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat' id='education'>
        <Education />
      </section>
      {/* Expertise Section */}
      <section ref={(el) => (sectionsRef.current[3] = el)} id='expertise'>
        <Skills />
      </section>
      <section ref={(el) => (sectionsRef.current[4] = el)} className='bg-grid-2 bg-contain bg-center bg-no-repeat' id='expertise'>
        <Stats />
      </section>
      <section ref={(el) => (sectionsRef.current[5] = el)} id='expertise'>
        <Certifications />
      </section>
      {/* Testimonial Section */}
      {/* Project Section */}
      <section ref={(el) => (sectionsRef.current[6] = el)} className='h-screen' id='projects'>
        <Project />
      </section>
      {/* Contact and Footer Section */}
      <section ref={(el) => (sectionsRef.current[7] = el)} className='h-screen bg-grid-2 bg-contain bg-center bg-no-repeat' id='contact'>
        <Contact />
      </section>
    </>
  );
}
