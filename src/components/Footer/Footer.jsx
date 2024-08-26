import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaCodepen } from 'react-icons/fa';
import './Footer.css'; // Import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Follow Me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/muni-kiran-ch-22a229256/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/muni_kiran.ch/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/MuniKiranCh" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com/MuniKiranCh" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>Built by Ch Muni Kiran &copy; 2024.</p>
    </footer>
  );
};

export default Footer;
