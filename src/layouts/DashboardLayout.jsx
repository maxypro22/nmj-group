import React, { useState } from 'react';
import { Outlet, Navigate, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSiteContext } from '../context/SiteContext';

const DashboardLayout = () => {
  const { isAuthenticated, logout } = useSiteContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { to: '/dashboard', label: '🏠 Dashboard Home' },
    { to: '/', label: '🌐 View Live Site ↗', target: '_blank' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'var(--font-primary)' }}>
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40 }}
        />
      )}

      {/* Sidebar */}
      <aside style={{
        width: '250px',
        backgroundColor: '#111827',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 50,
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
      }}
      className="dashboard-sidebar"
      >
        <div style={{ padding: '20px', fontSize: '1.3rem', fontWeight: 'bold', borderBottom: '1px solid #374151', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>NMJ Admin</span>
          <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '1.5rem', lineHeight: 1 }}>✕</button>
        </div>
        <nav style={{ flex: 1, padding: '20px 0' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              target={link.target}
              onClick={() => setSidebarOpen(false)}
              style={{
                display: 'block',
                padding: '15px 20px',
                color: location.pathname === link.to ? 'white' : '#d1d5db',
                textDecoration: 'none',
                backgroundColor: location.pathname === link.to ? '#374151' : 'transparent',
                borderLeft: location.pathname === link.to ? '3px solid #10b981' : '3px solid transparent',
                transition: 'all 0.2s'
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '20px', borderTop: '1px solid #374151' }}>
          <button onClick={handleLogout} style={{ width: '100%', padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Header Bar */}
        <header style={{ backgroundColor: 'white', padding: '15px 20px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '15px', position: 'sticky', top: 0, zIndex: 30, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <button
            onClick={() => setSidebarOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            aria-label="Open menu"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#374151' }}></span>
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#374151' }}></span>
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#374151' }}></span>
          </button>
          <h1 style={{ margin: 0, fontSize: '1.1rem', color: '#111827', fontWeight: '600' }}>NMJ Group Admin</h1>
          <button onClick={handleLogout} style={{ marginLeft: 'auto', padding: '7px 14px', background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
