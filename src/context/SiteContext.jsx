import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const defaultContent = {
  theme: {
    primaryColor: '#1e3e62',
    accentColor: '#d6a354',
    bgColor: '#ffffff',
    textColor: '#0b192c',
  },
  home: {
    heroH1: "NMJ Group: Delivering Excellence Across Diversified Industries",
    heroP: "A diversified business group based in Doha, Qatar, providing integrated solutions across Hospitality, Real Estate, Construction, Events, Services, Technology, and AI.",
    section1Title: "Our Strategic Foundation",
    section1Desc: "A unified vision steering our growth and client commitment across all Qatari business sectors."
  },
  about: {
    heroH1: "About NMJ Group",
    heroP: "NMJ Group is a diversified business group based in Doha, Qatar, with operations across hospitality, real estate, construction, events, services, technology, and AI.",
    missionTitle: "Mission",
    missionP: "To deliver exceptional services across hospitality, real estate, contracting, technology, AI, and lifestyle sectors through quality, innovation, and reliability."
  },
  divisions: {
    heroH1: "NMJ Group Divisions",
    heroP: "Integrated business solutions across hospitality, real estate, construction, events, services, technology, and AI in Doha, Qatar."
  },
  contact: {
    heroH1: "Contact NMJ Group",
    heroP: "For business inquiries, partnerships, or general information, get in touch with NMJ Group in Doha, Qatar."
  }
};

const SiteContext = createContext();

export const useSiteContext = () => useContext(SiteContext);

export const SiteProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(() => {
    const savedData = localStorage.getItem('nmj_site_data');
    return savedData ? JSON.parse(savedData) : defaultContent;
  });

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('nmj_messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('nmj_auth') === 'true';
  });

  const [credentials, setCredentials] = useState(() => {
    const saved = localStorage.getItem('nmj_credentials');
    return saved ? JSON.parse(saved) : { email: 'admin@nmj.com', password: 'admin' };
  });

  useEffect(() => {
    localStorage.setItem('nmj_credentials', JSON.stringify(credentials));
  }, [credentials]);

  const [loading, setLoading] = useState(true);

  // Load data from Supabase on mount (if configured)
  useEffect(() => {
    const loadFromSupabase = async () => {
      if (!isSupabaseConfigured()) {
        setLoading(false);
        return;
      }
      try {
        // Load site content
        const { data: contentRow } = await supabase
          .from('site_content')
          .select('data')
          .eq('id', 1)
          .single();
        if (contentRow && contentRow.data && Object.keys(contentRow.data).length > 0) {
          const { _admin, ...siteOnly } = contentRow.data;
          // Load credentials from Supabase if they exist
          if (_admin && _admin.email && _admin.password) {
            setCredentials({ email: _admin.email, password: _admin.password });
          }
          if (Object.keys(siteOnly).length > 0) {
            setSiteData(siteOnly);
          }
        }

        // Load messages
        const { data: msgs } = await supabase
          .from('messages')
          .select('*')
          .order('created_at', { ascending: false });
        if (msgs) {
          setMessages(msgs);
        }
      } catch (err) {
        console.warn('Supabase load failed, using localStorage fallback:', err);
      }
      setLoading(false);
    };
    loadFromSupabase();
  }, []);

  // Always sync to localStorage as fallback
  useEffect(() => {
    localStorage.setItem('nmj_site_data', JSON.stringify(siteData));
  }, [siteData]);

  useEffect(() => {
    localStorage.setItem('nmj_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    sessionStorage.setItem('nmj_auth', isAuthenticated);
  }, [isAuthenticated]);

  const login = (email, password) => {
    if (email === credentials.email && password === credentials.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const changePassword = async (oldPassword, newPassword) => {
    if (oldPassword !== credentials.password) {
      return { success: false, error: 'كلمة المرور القديمة غير صحيحة' };
    }
    const newCreds = { ...credentials, password: newPassword };
    setCredentials(newCreds);
    // Save updated credentials to Supabase so all devices stay in sync
    if (isSupabaseConfigured()) {
      try {
        const { data: contentRow } = await supabase.from('site_content').select('data').eq('id', 1).single();
        const currentData = contentRow?.data || {};
        const { _admin: _, ...siteOnly } = currentData;
        await supabase.from('site_content').update({ data: { ...siteOnly, _admin: newCreds } }).eq('id', 1);
      } catch (err) {
        console.warn('Supabase credentials update failed:', err);
      }
    }
    return { success: true };
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('nmj_auth');
  };

  const updateSiteData = async (newData) => {
    setSiteData(newData);
    if (isSupabaseConfigured()) {
      try {
        // Always preserve the _admin block so credentials stay in Supabase
        await supabase.from('site_content').update({ data: { ...newData, _admin: credentials } }).eq('id', 1);
      } catch (err) {
        console.warn('Supabase update failed:', err);
      }
    }
  };

  const addMessage = async (message) => {
    const newMsg = { ...message, id: Date.now(), date: new Date().toLocaleString() };
    setMessages(prev => [newMsg, ...prev]);
    if (isSupabaseConfigured()) {
      try {
        await supabase.from('messages').insert({
          name: message.name,
          email: message.email,
          subject: message.subject,
          message: message.message,
          date: newMsg.date,
        });
      } catch (err) {
        console.warn('Supabase insert failed:', err);
      }
    }
  };

  const deleteMessage = async (id) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
    if (isSupabaseConfigured()) {
      try {
        await supabase.from('messages').delete().eq('id', id);
      } catch (err) {
        console.warn('Supabase delete failed:', err);
      }
    }
  };

  const resetToDefaults = async () => {
    setSiteData(defaultContent);
    if (isSupabaseConfigured()) {
      try {
        // Preserve credentials when resetting content
        await supabase.from('site_content').update({ data: { ...defaultContent, _admin: credentials } }).eq('id', 1);
      } catch (err) {
        console.warn('Supabase reset failed:', err);
      }
    }
  };

  return (
    <SiteContext.Provider value={{ siteData, updateSiteData, messages, addMessage, deleteMessage, resetToDefaults, isAuthenticated, login, logout, loading, changePassword }}>
      {children}
    </SiteContext.Provider>
  );
};
