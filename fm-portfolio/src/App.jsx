import React from 'react';
import {NoPage, Home, AllProjects} from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
