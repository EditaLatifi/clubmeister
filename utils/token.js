// utils/token.js

// Token i përdoruesit të thjeshtë
export const getAuthToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userToken');
    }
    return null;
  };
  
  // Token i admin-it
  export const getAdminAuthToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken');
    }
    return null;
  };
  
  // Opsionale: ruaj token
  export const setAuthToken = (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userToken', token);
    }
  };
  
  // Opsionale: ruaj token e admin
  export const setAdminAuthToken = (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminToken', token);
    }
  };
  