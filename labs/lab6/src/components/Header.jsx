import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import './Header.css'; 

function Header() {
  return (
    <header className="app-header"> 
      <nav className="app-nav"> 
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Contact
        </NavLink>
         <NavLink
          to="/messages" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Messages
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;