import React from 'react';
import { Sidebar, Hero, About, Education, Skills, Project, Contact, Certifications, Stats } from './components';
import AllProjects from './pages/AllProjects';
import NoPage from './pages/NoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLenisScroll from './hooks/useLenisScroll';
import useActivateLink from './hooks/useActivateLink';

const Home = () => {
  const { sectionsRef, activeSection } = useActivateLink();
  useLenisScroll();

  return (
    <>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          activeSection === 'contact' ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
      <section ref={(el) => (sectionsRef.current[2] = el)} className='bg-grid-1 bg-contain bg-center bg-no-repeat' id='education'>
        <Education />
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)} id='expertise'>
        <Skills />
      </section>
      <section ref={(el) => (sectionsRef.current[4] = el)} className='bg-grid-2 bg-contain bg-center bg-no-repeat' id='stats'>
        <Stats />
      </section>
      <section ref={(el) => (sectionsRef.current[5] = el)} id='certifications'>
        <Certifications />
      </section>
      <section ref={(el) => (sectionsRef.current[6] = el)} className='h-screen' id='projects'>
        <Project />
      </section>
      <section ref={(el) => (sectionsRef.current[7] = el)} className='h-screen bg-grid-2 bg-contain bg-center bg-no-repeat' id='contact'>
        <Contact />
      </section>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
