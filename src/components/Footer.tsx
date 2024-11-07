import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="about-section">
          <h3 className="footer-title">Ahsan Khan</h3>
          <p>Your future full-stack developer, making web solutions.</p>
        </div>
        
        {/* Quick Links */}
        <div className="quick-links">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="link-list">
            <li className='link-item'><Link href="/">Home</Link></li>
            <li className='link-item'><Link href="/projects">Projects</Link></li>
            <li className='link-item'><Link href="/about">About</Link></li>
            <li className='link-item'><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h4 className="footer-subtitle">Get in Touch</h4>
          <form className="form">
            <input className="form-input" type="text" placeholder="Name" />
            <input className="form-input" type="email" placeholder="Email" />
            <textarea className="form-textarea" rows={3} placeholder="Message"></textarea>
            <button className="form-button">Send</button>
          </form>
        </div>

      </div>

      {/* Social Links */}
      <div className="social-links">
        <a className="social-icon" href="https://www.linkedin.com/in/ahsan-khan-6a8b902b4/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        <a className="social-icon" href="https://github.com/SirAhsanKhan" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
      </div>

      {/* Copyright */}
      <p className="footer-copyright">
        © 2024 Ahsan Khan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
