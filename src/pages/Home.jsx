import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../context/SiteContext';

const Home = () => {
  const { siteData } = useSiteContext();

  return (
    <>
      <section className="hero">
        <div className="container grid-2">
          <div className="hero-text reveal">
            <h1>{siteData.home.heroH1}</h1>
            <p>{siteData.home.heroP}</p>
            <div className="hero-actions">
              <Link to="/divisions" className="btn btn-primary">Explore Our Divisions →</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
          
          <div className="hero-visual reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="hero-abstract-art">
              <div className="hero-doha-grid">
                <div className="grid-block grid-block-span-2">
                  <span className="block-icon">🏢</span>
                  <span className="block-label">Real Estate</span>
                </div>
                <div className="grid-block grid-block-row-span-2">
                  <span className="block-icon">🛎️</span>
                  <span className="block-label">Hospitality</span>
                </div>
                <div className="grid-block">
                  <span className="block-icon">🤖</span>
                  <span className="block-label">AI Systems</span>
                </div>
                <div className="grid-block grid-block-span-2">
                  <span className="block-icon">🏗️</span>
                  <span className="block-label">Construction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="snapshot-section">
        <div className="container">
          <div className="snapshot-grid">
            <div className="snapshot-card reveal">
              <div className="snapshot-icon">📍</div>
              <div className="snapshot-info">
                <h3>Headquarters</h3>
                <p>Doha, Qatar</p>
              </div>
            </div>
            <div className="snapshot-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="snapshot-icon">💼</div>
              <div className="snapshot-info">
                <h3>Core Sectors</h3>
                <p style={{ fontSize: '0.9rem' }}>Hospitality, Real Estate, Construction, Events, Services, Technology, and AI</p>
              </div>
            </div>
            <div className="snapshot-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="snapshot-icon">⚙️</div>
              <div className="snapshot-info">
                <h3>Business Units</h3>
                <p>8 Specialized Divisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>{siteData.home.section1Title}</h2>
            <p>{siteData.home.section1Desc}</p>
          </div>
          
          <div className="identity-grid">
            <div className="identity-card reveal">
              <h3><span>👁️</span> Vision</h3>
              <p>To be a leading diversified group in Qatar and the region.</p>
            </div>
            <div className="identity-card reveal" style={{ transitionDelay: '0.1s' }}>
              <h3><span>🚀</span> Mission</h3>
              <p>To deliver high-quality services and innovative solutions across our business sectors.</p>
            </div>
            <div className="identity-card reveal" style={{ transitionDelay: '0.2s' }}>
              <h3><span>💎</span> Core Values</h3>
              <ul>
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Customer Focus</li>
                <li>Innovation</li>
                <li>Teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>Our Business Divisions</h2>
            <p>NMJ Group operates across multiple divisions, each serving a distinct sector while contributing to one shared standard of quality, service, and growth.</p>
          </div>
          
          <div className="divisions-grid">
            <div className="division-card reveal">
              <div className="division-card-icon">🛎️</div>
              <h3>Hospitality Division</h3>
              <p>Hotels and restaurant operations focused on guest experience and service quality.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="division-card-icon">🏢</div>
              <h3>Real Estate Division</h3>
              <p>Property leasing, sales, and practical real estate support for modern residential and business needs.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="division-card-icon">🏗️</div>
              <h3>Construction Division</h3>
              <p>Contracting, fit-out works, and technical project delivery for commercial and residential needs.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="division-card-icon">🎉</div>
              <h3>Events Division</h3>
              <p>Wedding planning, corporate events, and social celebrations with structured execution.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="division-card-icon">🧹</div>
              <h3>Services Division</h3>
              <p>Residential, office, and hospitality support services delivered with dependable daily operations.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.25s' }}>
              <div className="division-card-icon">💻</div>
              <h3>Technology Division</h3>
              <p>Software systems and digital solutions that improve workflow and business efficiency.</p>
            </div>
            <div className="division-card reveal" style={{ transitionDelay: '0.3s', gridColumn: 'span 1' }}>
              <div className="division-card-icon">🤖</div>
              <h3>AI Division</h3>
              <p>Intelligent automation and AI-driven systems for communication, workflow, and operations.</p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '50px' }}>
            <Link to="/divisions" className="btn btn-outline-dark reveal">View All Divisions →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="leadership-visual reveal">
            <div className="leadership-artwork">
              <div className="leadership-badge">Governing Panel</div>
              <h3>Steered by Ambition</h3>
              <p>Navigating business landscapes with absolute discipline and clear long-term foresight.</p>
            </div>
          </div>
          
          <div className="leadership-content reveal" style={{ transitionDelay: '0.15s' }}>
            <h2>Driven by Experienced Leadership</h2>
            <p>NMJ Group continues to grow through disciplined leadership, strategic direction, and a strong focus on long-term value creation across all divisions.</p>
            
            <div className="leadership-bullets">
              <div className="leadership-bullet-item">
                <div className="leadership-bullet-icon">✓</div>
                <span>Strategic Growth & Innovation</span>
              </div>
              <div className="leadership-bullet-item">
                <div className="leadership-bullet-icon">✓</div>
                <span>Integrated Business Solutions</span>
              </div>
              <div className="leadership-bullet-item">
                <div className="leadership-bullet-icon">✓</div>
                <span>Operational Accountability</span>
              </div>
              <div className="leadership-bullet-item">
                <div className="leadership-bullet-icon">✓</div>
                <span>Commitment to Value Creation</span>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-outline-dark">Read More About Us</Link>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>Future Expansion Strategy</h2>
          </div>
          
          <div className="expansion-grid">
            <div className="expansion-card reveal">
              <div className="expansion-icon">🛎️</div>
              <h3>Hospitality Expansion</h3>
            </div>
            <div className="expansion-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="expansion-icon">🏢</div>
              <h3>Real Estate Development</h3>
            </div>
            <div className="expansion-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="expansion-icon">🏗️</div>
              <h3>Construction and Events Growth</h3>
            </div>
            <div className="expansion-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="expansion-icon">🤖</div>
              <h3>Technology and AI Integration</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-container reveal">
          <h2>Connect with NMJ Group</h2>
          <p>For business inquiries, partnerships, or general information, contact our team in Doha, Qatar.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <a href="mailto:info@nmj-group.qa" className="btn btn-secondary">Email Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
