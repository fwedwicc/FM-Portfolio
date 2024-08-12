import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NoPage, Home, AllProjects, ProjectOverview } from './pages/index.js';
import { ProjectOverviewData } from './constants/index.js';
import App from './App.jsx'
import './index.css'

const projects = ProjectOverviewData;

const router = createBrowserRouter([
  {
    path: "/FM-Portfolio/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/FM-Portfolio/all-projects",
        element: <AllProjects projects={projects} />,
      },
      {
        path: "/FM-Portfolio/all-projects/:projectId",
        element: <ProjectOverview projects={projects} />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
],
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
