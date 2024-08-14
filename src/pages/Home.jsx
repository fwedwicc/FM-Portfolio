import React, { useEffect } from 'react';
import { Sidebar, Hero, About, Education, Skills, Project, Contact, Certifications, Stats } from '../components';
import { motion } from 'framer-motion'
import useActivateLink from '../hooks/useActivateLink';
import useScrollRestoration from '../hooks/useScrollRestoration'
import Modal from '../components/Modal'

const Home = () => {
  useScrollRestoration();
  const { sectionsRef, activeSection } = useActivateLink();

  // Directly navigate to the section if hash is present in the URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <Modal />
      <div
        className={`transition-opacity duration-500 ease-in-out ${activeSection === 'contact' ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <Sidebar activeSection={activeSection} />
      </div>
      <main ref={(el) => (sectionsRef.current[0] = el)} className='h-screen bg-grid-1 bg-contain bg-center bg-no-repeat' id='home'>
        <Hero />
      </main>
      <section ref={(el) => (sectionsRef.current[1] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat' id='about'>
        <About />
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat w-full' id='education'>
        <Education />
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)} id='expertise' className='w-full'>
        <Skills />
      </section>
      <section ref={(el) => (sectionsRef.current[4] = el)} className='bg-grid-2 bg-contain bg-center bg-no-repeat w-full' id='expertise'>
        <Stats />
      </section>
      <section ref={(el) => (sectionsRef.current[5] = el)} id='expertise' className='w-full'>
        <Certifications />
      </section>
      <section ref={(el) => (sectionsRef.current[6] = el)} className='h-screen w-full' id='projects'>
        <Project />
      </section>
      <section ref={(el) => (sectionsRef.current[7] = el)} className='h-screen bg-grid-2 bg-contain bg-center bg-no-repeat w-full' id='contact'>
        <Contact />
      </section>
    </motion.div>
  );
};

export default Home
