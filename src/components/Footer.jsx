import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div className="footer-col-1">
            <Link to="/" className="logo" style={{ marginBottom: '20px' }}>
              <div className="logo-icon" style={{ color: 'var(--accent-color)' }}>N</div>
              <div className="logo-text" style={{ color: 'var(--white)' }}>NMJ GROUP</div>
            </Link>
            <p>NMJ Group is a diversified business group based in Doha, Qatar, steering multiple highly competitive industry-leading brands towards a shared standard of operational excellence.</p>
          </div>
          {/* Col 2 */}
          <div className="footer-col-2">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/divisions">Divisions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="footer-col-3">
            <h4>Core Sectors</h4>
            <ul>
              <li><Link to="/divisions#hospitality">Hospitality & Dining</Link></li>
              <li><Link to="/divisions#realestate">Real Estate sales</Link></li>
              <li><Link to="/divisions#construction">Trading & Contracting</Link></li>
              <li><Link to="/divisions#events">Event Management</Link></li>
              <li><Link to="/divisions#services">Office & Home Services</Link></li>
              <li><Link to="/divisions#technology">Technology & AI</Link></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div className="footer-col-4">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <span className="contact-icon">📍</span>
                <span>Al Muftah Plaza, Al Rayyan Road, PO Box 8113, Doha, Qatar</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+97444440085">+974 4444 0085</a>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@nmj-group.qa">info@nmj-group.qa</a>
              </li>
              <li>
                <span className="contact-icon">🔗</span>
                <a href="https://www.linkedin.com/company/nmj-qatar" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 NMJ Group. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
