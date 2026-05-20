import React from 'react';
import { Outlet, Navigate, Link, useNavigate } from 'react-router-dom';
import { useSiteContext } from '../context/SiteContext';

const DashboardLayout = () => {
  const { isAuthenticated, logout } = useSiteContext();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'var(--font-primary)' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#111827', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '1px solid #374151', textAlign: 'center' }}>
          NMJ Admin
        </div>
        <nav style={{ flex: 1, padding: '20px 0' }}>
          <Link to="/dashboard" style={{ display: 'block', padding: '15px 20px', color: '#d1d5db', textDecoration: 'none', transition: 'background 0.2s' }} onMouseOver={(e) => e.target.style.background='#374151'} onMouseOut={(e) => e.target.style.background='transparent'}>
             Dashboard Home
          </Link>
          <Link to="/" target="_blank" style={{ display: 'block', padding: '15px 20px', color: '#d1d5db', textDecoration: 'none', transition: 'background 0.2s' }} onMouseOver={(e) => e.target.style.background='#374151'} onMouseOut={(e) => e.target.style.background='transparent'}>
             View Live Site ↗
          </Link>
        </nav>
        <div style={{ padding: '20px', borderTop: '1px solid #374151' }}>
          <button onClick={handleLogout} style={{ width: '100%', padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
