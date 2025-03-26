import React from 'react';

function Home() {
  return React.createElement(
    'div',
    { className: 'container mt-5' },
    React.createElement(
      'h1',
      null,
      'Welcome to My Portfolio'
    ),
    React.createElement(
      'p',
      null,
      'This is my personal portfolio, showcasing my skills and projects.'
    )
  );
}

export default Home;