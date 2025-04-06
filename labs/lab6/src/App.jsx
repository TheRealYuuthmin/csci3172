import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Messages from './pages/Messages';
import NotFound from './pages/NotFound';

// Import Components
import ThemeSwitcher from './components/ThemeSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'; 

function App() {
  return (
    <Router>
      {}
      <ThemeSwitcher />
      <Header /> {}
      <main> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> {}
          <Route path="/messages" element={<Messages />} /> {}
          <Route path="*" element={<NotFound />} /> {}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;