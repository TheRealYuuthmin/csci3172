import React from 'react';

function About() {
  return React.createElement(
    'div',
    { className: 'container mt-5' },
    React.createElement(
      'h2',
      null,
      'About Me'
    ),
    React.createElement(
      'p',
      null,
      'I am a passionate developer with a background in [Your Field]. My skills include:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'JavaScript'
      ),
      React.createElement(
        'li',
        null,
        'React'
      ),
      React.createElement(
        'li',
        null,
        'HTML5/CSS3'
      )
      // Add more skills here
    ),
    React.createElement(
      'p',
      null,
      'My career goals involve contributing to innovative projects and continuously learning new technologies.'
    )
  );
}