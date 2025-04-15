import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© {new Date().getFullYear()} Kanithi Jayanth Babu. All rights reserved.</p>
        <div className="footer__socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/yourinsta" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
  }
export default Footer;