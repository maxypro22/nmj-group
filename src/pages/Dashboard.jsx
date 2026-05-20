import React, { useState, useEffect } from 'react';
import { useSiteContext } from '../context/SiteContext';

const Dashboard = () => {
  const { siteData, updateSiteData, messages, deleteMessage, resetToDefaults } = useSiteContext();
  const [activeTab, setActiveTab] = useState('messages');
  
  // Clone the siteData deeply to avoid direct mutation
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(siteData)));
  const [saveStatus, setSaveStatus] = useState('');

  // Re-sync form data if siteData changes externally (like after reset)
  useEffect(() => {
    setFormData(JSON.parse(JSON.stringify(siteData)));
  }, [siteData]);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSiteData(formData);
    setSaveStatus('Changes published successfully! View the live site to see them.');
    setTimeout(() => setSaveStatus(''), 4000);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all content to defaults? This cannot be undone.")) {
      resetToDefaults();
      setSaveStatus('Site reset to default content.');
      setTimeout(() => setSaveStatus(''), 4000);
    }
  };

  // Card style helpers
  const cardStyle = {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    marginBottom: '30px'
  };

  const sectionHeadingStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    borderBottom: '2px solid #e5e7eb',
    paddingBottom: '10px',
    marginBottom: '20px',
    marginTop: '30px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 15px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    transition: 'border-color 0.15s ease-in-out'
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', margin: 0 }}>Dashboard Overview</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setActiveTab('messages')}
            style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '500', background: activeTab === 'messages' ? '#111827' : '#e5e7eb', color: activeTab === 'messages' ? 'white' : '#374151' }}
          >
            Inbox ({messages.length})
          </button>
          <button 
            onClick={() => setActiveTab('cms')}
            style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '500', background: activeTab === 'cms' ? '#111827' : '#e5e7eb', color: activeTab === 'cms' ? 'white' : '#374151' }}
          >
            Site Editor
          </button>
        </div>
      </div>

      {saveStatus && (
        <div style={{ background: '#dcfce3', color: '#166534', padding: '15px 20px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', borderLeft: '4px solid #16a34a' }}>
          <span style={{ marginRight: '10px' }}>✓</span> {saveStatus}
        </div>
      )}

      {activeTab === 'messages' && (
        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#111827' }}>Recent Inquiries</h2>
          {messages.length === 0 ? (
            <div style={{ padding: '40px', background: '#f9fafb', textAlign: 'center', borderRadius: '8px', color: '#6b7280' }}>
              No messages yet. Submissions from the Contact form will appear here.
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                    <th style={{ padding: '15px 10px', color: '#4b5563', fontWeight: '600' }}>Date</th>
                    <th style={{ padding: '15px 10px', color: '#4b5563', fontWeight: '600' }}>Name</th>
                    <th style={{ padding: '15px 10px', color: '#4b5563', fontWeight: '600' }}>Email</th>
                    <th style={{ padding: '15px 10px', color: '#4b5563', fontWeight: '600' }}>Subject</th>
                    <th style={{ padding: '15px 10px', color: '#4b5563', fontWeight: '600' }}>Message</th>
                    <th style={{ padding: '15px 10px', color: '#4b5563', fontWeight: '600' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map(msg => (
                    <tr key={msg.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '15px 10px', fontSize: '14px', color: '#6b7280' }}>{msg.date}</td>
                      <td style={{ padding: '15px 10px', fontWeight: '500', color: '#111827' }}>{msg.name}</td>
                      <td style={{ padding: '15px 10px', color: '#2563eb' }}><a href={`mailto:${msg.email}`}>{msg.email}</a></td>
                      <td style={{ padding: '15px 10px', color: '#374151' }}>{msg.subject}</td>
                      <td style={{ padding: '15px 10px', color: '#4b5563', maxWidth: '250px' }}>{msg.message}</td>
                      <td style={{ padding: '15px 10px' }}>
                        <button onClick={() => deleteMessage(msg.id)} style={{ background: '#fee2e2', color: '#b91c1c', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === 'cms' && (
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#111827', margin: 0 }}>Content Management</h2>
            <button type="button" onClick={handleReset} style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef4444', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Restore Defaults</button>
          </div>
          
          <form onSubmit={handleSave}>
            
            {/* Theme Settings */}
            <h3 style={{...sectionHeadingStyle, marginTop: 0}}>Theme & Branding</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Primary Color</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input type="color" value={formData.theme.primaryColor} onChange={(e) => handleInputChange('theme', 'primaryColor', e.target.value)} style={{ height: '42px', width: '50px', cursor: 'pointer', padding: '2px', border: '1px solid #d1d5db', borderRadius: '6px' }} />
                  <input type="text" value={formData.theme.primaryColor} onChange={(e) => handleInputChange('theme', 'primaryColor', e.target.value)} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Accent Color</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input type="color" value={formData.theme.accentColor} onChange={(e) => handleInputChange('theme', 'accentColor', e.target.value)} style={{ height: '42px', width: '50px', cursor: 'pointer', padding: '2px', border: '1px solid #d1d5db', borderRadius: '6px' }} />
                  <input type="text" value={formData.theme.accentColor} onChange={(e) => handleInputChange('theme', 'accentColor', e.target.value)} style={inputStyle} />
                </div>
              </div>
            </div>

            {/* Home Page */}
            <h3 style={sectionHeadingStyle}>Home Page</h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Hero Heading (H1)</label>
              <input type="text" value={formData.home.heroH1} onChange={(e) => handleInputChange('home', 'heroH1', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Hero Subtitle</label>
              <textarea rows="3" value={formData.home.heroP} onChange={(e) => handleInputChange('home', 'heroP', e.target.value)} style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Section 1 Title</label>
              <input type="text" value={formData.home.section1Title} onChange={(e) => handleInputChange('home', 'section1Title', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Section 1 Description</label>
              <textarea rows="2" value={formData.home.section1Desc} onChange={(e) => handleInputChange('home', 'section1Desc', e.target.value)} style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>

            {/* About Page */}
            <h3 style={sectionHeadingStyle}>About Page</h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Hero Heading (H1)</label>
              <input type="text" value={formData.about.heroH1} onChange={(e) => handleInputChange('about', 'heroH1', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Hero Subtitle</label>
              <textarea rows="3" value={formData.about.heroP} onChange={(e) => handleInputChange('about', 'heroP', e.target.value)} style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Mission Title</label>
              <input type="text" value={formData.about.missionTitle} onChange={(e) => handleInputChange('about', 'missionTitle', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Mission Description</label>
              <textarea rows="3" value={formData.about.missionP} onChange={(e) => handleInputChange('about', 'missionP', e.target.value)} style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>

            {/* Divisions Page */}
            <h3 style={sectionHeadingStyle}>Divisions Page</h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Hero Heading (H1)</label>
              <input type="text" value={formData.divisions.heroH1} onChange={(e) => handleInputChange('divisions', 'heroH1', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Hero Subtitle</label>
              <textarea rows="2" value={formData.divisions.heroP} onChange={(e) => handleInputChange('divisions', 'heroP', e.target.value)} style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>

            {/* Contact Page */}
            <h3 style={sectionHeadingStyle}>Contact Page</h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Hero Heading (H1)</label>
              <input type="text" value={formData.contact.heroH1} onChange={(e) => handleInputChange('contact', 'heroH1', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Hero Subtitle</label>
              <textarea rows="2" value={formData.contact.heroP} onChange={(e) => handleInputChange('contact', 'heroP', e.target.value)} style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                {saveStatus && (
                  <div style={{ color: '#166534', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '8px', background: '#16a34a', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>✓</span> 
                    {saveStatus}
                  </div>
                )}
              </div>
              <button type="submit" style={{ padding: '12px 30px', fontSize: '1.1rem', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                Publish Changes (نشر)
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
