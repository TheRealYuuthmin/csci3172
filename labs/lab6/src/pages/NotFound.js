import React from 'react';
import { Link } from '../../node_modules/react-router-dom'; 
function NotFound() {
  return React.createElement(
    'div',
    { className: 'container mt-5' },
    React.createElement(
      'h1',
      null,
      '404 - Page Not Found'
    ),
    React.createElement(
      'p',
      null,
      'The page you are looking for does not exist.'
    ),
    React.createElement(
      Link,
      { to: '/' },
      'Go to Home Page'
    )
  );
}