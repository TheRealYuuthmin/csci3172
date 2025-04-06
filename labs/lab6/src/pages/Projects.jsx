import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api'; 

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getProjects()
      .then((data) => {
          setProjects(Array.isArray(data) ? data : []); 
      })
      .catch((error) => {
          console.error('Error fetching projects:', error);
          setError(`Failed to load projects: ${error.message}`);
          setProjects([]); 
      })
      .finally(() => {
          setIsLoading(false);
      });
  }, []);

  const getImageUrl = (imageName) => {
    try {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch (e) {
        console.error(`Error creating URL for image ${imageName}:`, e);
        return ''; 
    }
  };


  return (
    <main>
      <section>
        <h1>My Projects</h1>

        {isLoading && <p>Loading projects...</p>}
        {error && <p className="error-message">{error}</p>}

        {!isLoading && !error && projects.length === 0 && (
            <p>No projects found.</p>
        )}

        {!isLoading && !error && projects.map((project, index) => (
          <div key={project.name || index} className="project-card">
            <img
                src={getImageUrl(`project${index + 1}.jpg`)}
                alt={project.name || `Project ${index + 1}`}
                className="img-responsive"
                onError={(e) => { e.target.style.display='none'; }}
            />
            <h3>{project.name}</h3>
            <p><strong>Author:</strong> {project.author}</p> {}
            <p><strong>Languages:</strong> {project.languages ? project.languages.join(', ') : 'N/A'}</p> {}
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Projects;