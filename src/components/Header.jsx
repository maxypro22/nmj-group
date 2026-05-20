import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" id="headerLogo">
          <div className="logo-icon">N</div>
          <div className="logo-text">
            <span>NMJ GROUP</span>
            <span className="logo-sub">DOHA • QATAR</span>
          </div>
        </Link>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <span className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </span>
          <span className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </span>
          <span className="nav-item">
            <NavLink to="/divisions" className={({ isActive }) => (isActive ? 'active' : '')}>Divisions</NavLink>
          </span>
          <span className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          </span>
        </nav>
        
        <div className="header-cta">
          <Link to="/contact" className="btn btn-primary" id="headerCtaBtn">Contact Us</Link>
        </div>
        
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          id="mobileToggle" 
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
