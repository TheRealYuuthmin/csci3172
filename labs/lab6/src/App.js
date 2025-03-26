import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(Header, null),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
      React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
      React.createElement(Route, { path: '/projects', element: React.createElement(Projects, null) }),
      React.createElement(Route, { path: '*', element: React.createElement(NotFound, null) })
    ),
    React.createElement(Footer, null)
  );
}

export default App;