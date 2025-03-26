import React from 'react';

function Projects() {
  return React.createElement(
    'div',
    { className: 'container mt-5' },
    React.createElement(
      'h2',
      null,
      'Projects'
    ),
    React.createElement(
      'p',
      null,
      'Here are some of my projects:'
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Project 1: Example Project'
      ),
      React.createElement(
        'p',
        null,
        'Description: A brief description of the project.'
      ),
      React.createElement(
        'p',
        null,
        'Technologies: React, Bootstrap, etc.'
      )
      // Add more projects here
    )
  );
}