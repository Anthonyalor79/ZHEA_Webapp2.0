import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#e3e3e3' }}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;