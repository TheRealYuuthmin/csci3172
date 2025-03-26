import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
}

export default Footer;