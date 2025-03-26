import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return React.createElement(
    'nav',
    { className: 'navbar navbar-expand-lg navbar-light bg-light' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        Link,
        { className: 'navbar-brand', to: '/' },
        'My Portfolio'
      ),
      React.createElement(
        'ul',
        { className: 'navbar-nav' },
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            Link,
            { className: 'nav-link', to: '/' },
            'Home'
          )
        ),
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            Link,
            { className: 'nav-link', to: '/about' },
            'About'
          )
        ),
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            Link,
            { className: 'nav-link', to: '/projects' },
            'Projects'
          )
        )
      )
    )
  );
}

export default Header;