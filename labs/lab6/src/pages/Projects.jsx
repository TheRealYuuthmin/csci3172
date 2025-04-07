import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api'; 


function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true); 
    setError(null);
    console.log("Attempting to fetch projects..."); 

    getProjects()
      .then((data) => {
        console.log("Projects data received:", data); 
        setProjects(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error('Error fetching projects in component:', err);

        const errorMsg = err.response?.data?.error || err.message || 'Unknown error occurred';
        setError(`Failed to load projects: ${errorMsg}`);
        setProjects([]);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("Finished fetching projects."); 
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

  // --- Render Logic ---

  if (isLoading) {
    return (
        <main>
            <h1>My Projects</h1>
            <p>Loading projects...</p>
        </main>
    );
  }

  if (error) {
    return (
        <main>
            <h1>My Projects</h1>
            {/* Display the specific error message */}
            <p className="error-message" style={{ color: 'red', backgroundColor: '#ffebee', padding: '1rem', borderRadius: '4px' }}>
                {error}
            </p>
        </main>
    );
  }

  return (
    <main>
      <section>
        <h1>My Projects</h1>

        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project, index) => (
            <div key={project.name || index} className="project-card">
              {/* Fix image path using helper function */}
              <img
                  src={getImageUrl(`project${index + 1}.jpg`)}
                  alt={project.name || `Project ${index + 1}`}
                  className="img-responsive"
                  onError={(e) => { e.currentTarget.style.display='none'; }}
              />
              <h3>{project.name}</h3>
              <p><strong>Author:</strong> {project.author}</p>
              <p><strong>Languages:</strong> {project.languages ? project.languages.join(', ') : 'N/A'}</p>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default Projects;