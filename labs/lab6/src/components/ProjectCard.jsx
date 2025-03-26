import React from 'react';

function ProjectCard({ project }) {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>Author: {project.author}</p>
      <p>Languages: {project.languages.join(', ')}</p>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;