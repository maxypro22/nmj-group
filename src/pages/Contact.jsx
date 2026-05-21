import React, { useState } from 'react';
import { useSiteContext } from '../context/SiteContext';
import { MapPin, Phone, Mail, Link as LinkIcon } from 'lucide-react';

const Contact = () => {
  const { siteData, addMessage } = useSiteContext();
  const [formState, setFormState] = useState({
    status: 'idle', // 'idle', 'submitting', 'success'
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newMessage = {
      name: formData.get('fullName'),
      email: formData.get('emailAddress'),
      phone: formData.get('phoneNumber'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    setFormState({ status: 'submitting', message: '' });
    
    // Simulate slight delay then save to context
    setTimeout(() => {
      addMessage(newMessage); // Save to LocalStorage / Dashboard
      setFormState({ 
        status: 'success', 
        message: 'Your message has been sent successfully. Our team will get back to you shortly.' 
      });
      e.target.reset();
      
      setTimeout(() => {
        setFormState({ status: 'idle', message: '' });
      }, 3000);
    }, 1000);
  };

  return (
    <>
      <section className="about-hero" style={{ padding: '80px 0' }}>
        <div className="container">
          <h1 className="reveal">{siteData.contact.heroH1}</h1>
          <p className="reveal" style={{ transitionDelay: '0.1s' }}>{siteData.contact.heroP}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>Get in Touch</h2>
            <p>Choose your preferred communication channel to connect directly with our Doha headquarters.</p>
          </div>
          
          <div className="contact-info-grid">
            <a href="https://maps.app.goo.gl/NuSF7L8Y9TWVDGW17" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
              <div className="contact-card-icon"><MapPin size={28} /></div>
              <h3>Location</h3>
              <p>Al Muftah Plaza, Al Rayyan Road, PO Box 8113, Doha, Qatar</p>
            </a>
            
            <a href="tel:+97444440085" className="contact-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="contact-card-icon"><Phone size={28} /></div>
              <h3>Phone</h3>
              <p>+974 4444 0085</p>
            </a>
            
            <a href="mailto:info@nmj-group.qa" className="contact-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="contact-card-icon"><Mail size={28} /></div>
              <h3>Email</h3>
              <p>info@nmj-group.qa</p>
            </a>
            
            <a href="https://www.linkedin.com/company/nmj-qatar" target="_blank" rel="noopener noreferrer" className="contact-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="contact-card-icon"><LinkIcon size={28} /></div>
              <h3>LinkedIn</h3>
              <p>NMJ Group Profile</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>Send Us a Message</h2>
            <p>Share your inquiry with our team and we will get back to you as soon as possible.</p>
          </div>
          
          <div className="contact-form-container reveal">
            <form id="nmjContactForm" onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input type="text" name="fullName" id="fullName" className="form-control" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address *</label>
                  <input type="email" name="emailAddress" id="emailAddress" className="form-control" placeholder="Your email address" required />
                </div>
              </div>
              
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" name="phoneNumber" id="phoneNumber" className="form-control" placeholder="Your contact number" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" name="subject" id="subject" className="form-control" placeholder="Inquiry subject" required />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea name="message" id="message" className="form-control" placeholder="How can our team help you?" required></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ padding: '16px 36px', minWidth: '200px' }}
                  disabled={formState.status === 'submitting'}
                >
                  {formState.status === 'submitting' ? 'Sending Message...' : formState.status === 'success' ? 'Message Sent ✓' : 'Send Message'}
                </button>
              </div>
            </form>
            
            {formState.status === 'success' && (
              <div id="formFeedback" className="form-feedback success" style={{ display: 'block' }}>
                <strong>Thank you!</strong> {formState.message}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>Our Location</h2>
            <p>NMJ Group is based in Doha, Qatar. Visit our office location or view us on Google Maps.</p>
          </div>
          
          <div className="map-wrapper reveal">
            <a href="https://maps.app.goo.gl/NuSF7L8Y9TWVDGW17" target="_blank" rel="noopener noreferrer" className="map-placeholder">
              <div className="map-doha-grid"></div>
              <div className="map-pin"><MapPin size={48} color="#ef4444" /></div>
              <div className="map-info">
                <h3>NMJ Group Headquarters</h3>
                <p>Al Muftah Plaza, Al Rayyan Road, Doha, Qatar</p>
                <span className="btn btn-outline-dark" style={{ backgroundColor: 'var(--white)' }}>View NMJ Group on Google Maps & See Reviews</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
