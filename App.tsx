
import React, { useState, useEffect } from 'react';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import PublicWebsite from './components/PublicWebsite';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check session storage on initial load
    const loggedIn = sessionStorage.getItem('isAuthenticated') === 'true';
    if (loggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    // Redirect to the admin panel after login
    window.location.href = '/admin';
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    // Redirect to the homepage after logout
    window.location.href = '/';
  };

  const path = window.location.pathname;

  if (path === '/admin') {
    return isAuthenticated ? <AdminDashboard onLogout={handleLogout} /> : <AdminLogin onLogin={handleLogin} />;
  }
  
  return <PublicWebsite isAuthenticated={isAuthenticated} onLogout={handleLogout} />;
};

export default App;
