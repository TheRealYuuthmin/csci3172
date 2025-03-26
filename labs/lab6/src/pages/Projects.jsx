import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Projects;