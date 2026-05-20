import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../context/SiteContext';

const About = () => {
  const { siteData } = useSiteContext();

  return (
    <>
      <section className="about-hero">
        <div className="container">
          <h1 className="reveal">{siteData.about.heroH1}</h1>
          <p className="reveal" style={{ transitionDelay: '0.1s' }}>{siteData.about.heroP}</p>
          <Link to="/contact" className="btn btn-primary reveal" style={{ transitionDelay: '0.2s' }}>Contact Our Team</Link>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <div className="hero-abstract-art" style={{ height: '380px' }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle at center, rgba(30, 62, 98, 0.2) 0%, transparent 70%)' }}>
                <span style={{ fontSize: '4rem', marginBottom: '20px' }}>🇶🇦</span>
                <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', fontFamily: 'var(--font-heading)' }}>Corporate Integrity</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '5px' }}>Established in Doha, Qatar</p>
              </div>
            </div>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '24px', position: 'relative' }}>A Diversified Group Built for Modern Business</h2>
            <p style={{ marginBottom: '20px', fontSize: '1.05rem', color: 'var(--text-dark)' }}>NMJ Group brings together a portfolio of specialized divisions serving both individual and corporate needs across multiple industries in Qatar.</p>
            <p style={{ marginBottom: '20px', fontSize: '1.05rem', color: 'var(--text-dark)' }}>Our businesses span hospitality, dining, real estate, contracting, cleaning services, software, and AI-driven solutions, allowing us to operate across sectors while maintaining a clear standard of quality, reliability, and service.</p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)' }}>At NMJ Group, we focus on long-term value, customer trust, and sustainable growth through a connected business structure and a shared commitment to excellence.</p>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>What Drives Us</h2>
            <p>The strategic pillars underpinning our corporate path and operational accountability in Doha.</p>
          </div>
          
          <div className="identity-grid">
            <div className="identity-card reveal">
              <h3><span>🚀</span> {siteData.about.missionTitle}</h3>
              <p>{siteData.about.missionP}</p>
            </div>
            <div className="identity-card reveal" style={{ transitionDelay: '0.1s' }}>
              <h3><span>👁️</span> Vision</h3>
              <p>To be a leading diversified group in Qatar, recognized for excellence, innovation, and trust across all our sectors.</p>
            </div>
            <div className="identity-card reveal" style={{ transitionDelay: '0.2s' }}>
              <h3><span>💎</span> Core Values</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px' }}><strong>Excellence:</strong> Overdelivering on promises</li>
                <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px' }}><strong>Integrity:</strong> Trust in our relationships</li>
                <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px' }}><strong>Customer Focus:</strong> Centered on user success</li>
                <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px' }}><strong>Innovation:</strong> Driving tech and AI frontiers</li>
                <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px' }}><strong>Reliability:</strong> Dependable, consistent delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>What We Offer</h2>
            <p>A broad suite of market-leading solutions designed to address the needs of modern Qatar.</p>
          </div>
          
          <div className="divisions-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="division-card reveal">
              <div className="division-card-icon">🏨</div>
              <h3>Hotels & Restaurants</h3>
              <p>We deliver elite hospitality and fine dining experiences through Sapphire Plaza Hotel and Steak Town Restaurant in Doha.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="division-card-icon">🎉</div>
              <h3>Event Planning</h3>
              <p>Al Anaqh Events & Wedding Planning provides tailored event solutions with creativity, precision, and smooth execution.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="division-card-icon">🏢</div>
              <h3>Construction & Real Estate</h3>
              <p>Through Al Emara Al Islamiya Trading & Contracting and Dania Real Estate, we provide practical property, contracting, and development support.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="division-card-icon">🧹</div>
              <h3>Cleaning Services</h3>
              <p>Dania Maids offers residential and commercial cleaning solutions with a focus on quality, hygiene, and dependable service.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="division-card-icon">💻</div>
              <h3>IT & AI Solutions</h3>
              <p>NexIT Global and Five Nodes AI support business innovation through software, digital systems, automation, and AI-powered operational solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container grid-2">
          <div className="reveal">
            <h2 style={{ fontSize: '2.25rem', marginBottom: '24px' }}>Message from Leadership</h2>
            <p style={{ marginBottom: '20px', fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>At NMJ Group, our journey reflects ambition, resilience, and a clear purpose to create lasting value in Qatar.</p>
            <p style={{ marginBottom: '20px', fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>Each division within our group is built on a commitment to quality, trust, and meaningful service for our clients, partners, and community.</p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>As we continue to grow, we remain focused on progress, responsibility, innovation, and long-term impact across every sector we serve.</p>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="leadership-visual" style={{ height: '380px' }}>
              <div className="leadership-artwork">
                <span style={{ fontSize: '3rem', marginBottom: '15px' }}>🇶🇦</span>
                <h3>Doha's Vision 2030</h3>
                <p>Committed to standard development, economic diversification, and social sustainability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-container reveal">
          <h2>Get in Touch with NMJ Group</h2>
          <p>For business inquiries, partnerships, or general information, contact NMJ Group in Doha, Qatar. Let us construct a collaborative future together.</p>
          <div style={{ marginBottom: '30px', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', opacity: 0.9 }}>
            <span style={{ marginRight: '20px' }}>📞 +974 44440085</span>
            <span>✉️ info@nmj-group.qa</span>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/divisions" className="btn btn-secondary">View All Divisions</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
