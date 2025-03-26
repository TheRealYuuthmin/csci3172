import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <main>
      <section>
        <h1>My Projects</h1>
        {projects.map((project, index) => (
          <div key={project.name} className="project-card">
            <img src={`/images/project${index + 1}.jpg`} alt={project.name} />
            <h3>{project.name}</h3>
            <p>Author: {project.author}</p>
            <p>Languages: {project.languages.join(', ')}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Projects;