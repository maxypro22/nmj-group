import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../context/SiteContext';

const Divisions = () => {
  const { siteData } = useSiteContext();
  const [filter, setFilter] = useState('all');

  const handleFilter = (sector) => {
    setFilter(sector);
  };

  const isVisible = (sector) => filter === 'all' || filter === sector;

  return (
    <>
      <section className="about-hero">
        <div className="container">
          <h1 className="reveal">{siteData.divisions.heroH1}</h1>
          <p className="reveal" style={{ transitionDelay: '0.1s' }}>{siteData.divisions.heroP}</p>
          <Link to="/contact" className="btn btn-primary reveal" style={{ transitionDelay: '0.2s' }}>Contact Us</Link>
        </div>
      </section>

      <section className="section" style={{ padding: '60px 0 20px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="reveal">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary-color)' }}>A Diversified Business Structure</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>NMJ Group operates across multiple divisions, each serving a distinct sector while contributing to one shared standard of quality, operational excellence, and long-term growth in Qatar.</p>
          </div>
        </div>
      </section>

      <div className="container reveal" style={{ marginBottom: '40px' }}>
        <div className="divisions-tab-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          <button className={`tab-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All Sectors</button>
          <button className={`tab-btn ${filter === 'hospitality' ? 'active' : ''}`} onClick={() => handleFilter('hospitality')}>Hospitality & Dining</button>
          <button className={`tab-btn ${filter === 'realestate' ? 'active' : ''}`} onClick={() => handleFilter('realestate')}>Real Estate</button>
          <button className={`tab-btn ${filter === 'construction' ? 'active' : ''}`} onClick={() => handleFilter('construction')}>Construction</button>
          <button className={`tab-btn ${filter === 'events' ? 'active' : ''}`} onClick={() => handleFilter('events')}>Events & Weddings</button>
          <button className={`tab-btn ${filter === 'services' ? 'active' : ''}`} onClick={() => handleFilter('services')}>Cleaning Services</button>
          <button className={`tab-btn ${filter === 'technology' ? 'active' : ''}`} onClick={() => handleFilter('technology')}>Technology Solutions</button>
          <button className={`tab-btn ${filter === 'ai' ? 'active' : ''}`} onClick={() => handleFilter('ai')}>AI Systems</button>
        </div>
      </div>

      <section className="division-showcase-section" style={{ paddingTop: 0 }}>
        <div className="container">

          {/* HOSPITALITY */}
          {isVisible('hospitality') && (
            <div className="division-section reveal active" id="hospitality" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
              <div className="division-header-block">
                <h2><span>🛎️</span> Hospitality & Dining Division</h2>
                <p className="division-intro">Premium hotel and restaurant operations focused on elite guest experiences and culinary excellence in Doha.</p>
              </div>
              
              <div className="company-cards-grid">
                <div className="company-card">
                  <div className="company-card-header">
                    <h3 className="company-card-title">Sapphire Plaza Hotel Doha</h3>
                    <span className="company-card-badge">4-Star Hotel</span>
                  </div>
                  <p className="company-card-text">A distinguished 4-star luxury hotel offering exquisite rooms, fine dining, premium banquet halls, fitness center, and modern executive meeting facilities.</p>
                  <div className="company-details-list">
                    <div className="company-detail-item">
                      <span className="company-detail-icon">📍</span>
                      <span>Al Rayyan Road, Doha, Qatar</span>
                    </div>
                    <div className="company-detail-item">
                      <span className="company-detail-icon">📞</span>
                      <span>+974 4033 7000</span>
                    </div>
                    <div className="company-detail-item">
                      <span className="company-detail-icon">✉️</span>
                      <span>info@sapphire-hotels.com</span>
                    </div>
                  </div>
                  <div className="company-card-links">
                    <a href="https://sapphire-hotels.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>🌐 Visit Website →</a>
                  </div>
                </div>

                <div className="company-card">
                  <div className="company-card-header">
                    <h3 className="company-card-title">Steak Town Restaurant</h3>
                    <span className="company-card-badge">Fine Dining</span>
                  </div>
                  <p className="company-card-text">An upscale dining experience offering the finest cuts of meat, expertly prepared and served in a luxurious ambiance.</p>
                  <div className="company-details-list">
                    <div className="company-detail-item">
                      <span className="company-detail-icon">📍</span>
                      <span>Doha, Qatar</span>
                    </div>
                  </div>
                  <div className="company-card-links">
                    <a href="https://steaktown.qa/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>🌐 Visit Website →</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* REAL ESTATE */}
          {isVisible('realestate') && (
            <div className="division-section reveal active" id="realestate" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
              <div className="division-header-block">
                <h2><span>🏢</span> Real Estate Division</h2>
                <p className="division-intro">Comprehensive property management, leasing, and real estate advisory services.</p>
              </div>
              
              <div className="company-cards-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="company-card">
                  <div className="company-card-header">
                    <h3 className="company-card-title">Dania Real Estate</h3>
                    <span className="company-card-badge">Property Services</span>
                  </div>
                  <p className="company-card-text">Specialized in residential and commercial property leasing, facility management, and providing trusted real estate solutions across Qatar.</p>
                </div>
              </div>
            </div>
          )}

          {/* CONSTRUCTION */}
          {isVisible('construction') && (
            <div className="division-section reveal active" id="construction" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
              <div className="division-header-block">
                <h2><span>🏗️</span> Construction Division</h2>
                <p className="division-intro">General contracting, fit-out works, structural and MEP technical project delivery.</p>
              </div>
              
              <div className="company-cards-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="company-card">
                  <div className="company-card-header">
                    <h3 className="company-card-title">Al Emara Al Islamiya Trading & Contracting</h3>
                    <span className="company-card-badge">Contracting</span>
                  </div>
                  <p className="company-card-text">Delivering high-quality construction projects, structural development, and reliable engineering solutions for commercial and residential needs.</p>
                  <div className="company-card-links">
                    <a href="https://alemara.qa/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>🌐 Visit Website →</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EVENTS */}
          {isVisible('events') && (
            <div className="division-section reveal active" id="events" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
              <div className="division-header-block">
                <h2><span>🎉</span> Events Division</h2>
                <p className="division-intro">Bespoke wedding planning, corporate event management, and luxury celebrations.</p>
              </div>
              
              <div className="company-cards-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="company-card">
                  <div className="company-card-header">
                    <h3 className="company-card-title">Al Anaqh Events & Wedding Planning</h3>
                    <span className="company-card-badge">Event Management</span>
                  </div>
                  <p className="company-card-text">Executing unforgettable weddings and luxury corporate events with high creative precision, elegant designs, and seamless logistics.</p>
                  <div className="company-card-links">
                    <a href="https://alanaka.qa/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>🌐 Visit Website →</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SERVICES */}
          {isVisible('services') && (
            <div className="division-section reveal active" id="services" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
              <div className="division-header-block">
                <h2><span>🧹</span> Services Division</h2>
                <p className="division-intro">Professional cleaning and support services delivered with dependable daily operations.</p>
              </div>
              
              <div className="company-cards-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="company-card">
                  <div className="company-card-header">
                    <h3 className="company-card-title">Dania Maids</h3>
                    <span className="company-card-badge">Cleaning Services</span>
                  </div>
                  <p className="company-card-text">Providing certified professionals for residential, office, and hospitality cleaning solutions, ensuring hygiene and dependable service.</p>
                  <div className="company-card-links">
                    <a href="https://dania-maids.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>🌐 Visit Website →</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TECHNOLOGY */}
          {isVisible('technology') && (
            <div className="division-section reveal active" id="technology" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
              <div className="division-header-block">
                <h2><span>💻</span> Technology Division</h2>
                <p className="division-intro">Pioneering software engineering, enterprise cloud architectures, and digital transformation.</p>
              </div>
              <div className="company-cards-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="company-card">
                  <div className="company-card-header">
                    <h3 className="company-card-title">NexIT Global</h3>
                    <span className="company-card-badge">Software & Cloud Solutions</span>
                  </div>
                  <p className="company-card-text">Specialized in digital database management systems, customized SaaS platforms, deep data security protocols, workflow automation, and custom corporate software solutions.</p>
                  <div className="company-card-links">
                    <a href="https://nexitglobal.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>🌐 Visit Website →</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI */}
          {isVisible('ai') && (
            <div className="division-section reveal active" id="ai" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
              <div className="division-header-block">
                <h2><span>🤖</span> AI Systems Division</h2>
                <p className="division-intro">Intelligent automation, systems engineering, and data analytics built to automate modern business pipelines.</p>
              </div>
              <div className="company-cards-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="company-card">
                  <div className="company-card-header">
                    <h3 className="company-card-title">Five Nodes AI</h3>
                    <span className="company-card-badge">Artificial Intelligence</span>
                  </div>
                  <p className="company-card-text">Delivering next-generation AI-powered operational solutions, predictive analytics, and automated decision-making frameworks to maximize corporate efficiency.</p>
                  <div className="company-card-links">
                    <a href="https://fivenodes.ai/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>🌐 Visit Website →</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="reveal" style={{ marginTop: '40px', borderTop: '1px solid rgba(11, 25, 44, 0.08)', paddingTop: '60px' }}>
            <div className="section-header text-center">
              <h2>Future Expansion Strategy</h2>
              <p>Innovating future-proof local networks and services to consistently drive economic stability in Doha.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-container reveal">
          <h2>Connect with NMJ Group</h2>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Inquire Now</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Divisions;
