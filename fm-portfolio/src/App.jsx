import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NoPage, Home, AllProjects, ProjectOverview } from './pages';
import { ProjectOverviewData } from './constants';

export default function App() {
  const projects = ProjectOverviewData;

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects projects={projects} />} />
        <Route path="/project/:projectId" element={<ProjectOverview projects={projects} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
