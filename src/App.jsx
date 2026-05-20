import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollReveal from './components/ScrollReveal';
import { useSiteContext } from './context/SiteContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Divisions from './pages/Divisions';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const { siteData } = useSiteContext();

  return (
    <>
      <style>
        {`
          :root {
            --primary-color: ${siteData.theme.primaryColor};
            --accent-color: ${siteData.theme.accentColor};
            --bg-light: ${siteData.theme.bgColor};
            --text-dark: ${siteData.theme.textColor};
          }
        `}
      </style>
      <Router>
        <ScrollReveal />
        <Routes>
          {/* Public Routes with Header/Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
          {/* Auth Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Admin Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
