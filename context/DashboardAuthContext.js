// context/DashboardAuthContext.js

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const DashboardAuthContext = createContext(null);

export const useDashboardAuth = () => {
  return useContext(DashboardAuthContext);
};

export function DashboardAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Mbush user-in nga localStorage kur faqja rifreskohet
  useEffect(() => {
    const storedUser = localStorage.getItem('dashboardUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Funksioni i login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('dashboardUser', JSON.stringify(userData));
  };

  // Funksioni i logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('dashboardUser');
    router.push('/dashboard/login'); 
  };

  return (
    <DashboardAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </DashboardAuthContext.Provider>
  );
}
