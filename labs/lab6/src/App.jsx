import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ThemeSwitcher from './components/ThemeSwitcher';
import Header from './components/Header'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <ThemeSwitcher />
      <Header /> {/* Add header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
      <Footer /> {/* Add footer */}
    </Router>
  );
}

export default App;