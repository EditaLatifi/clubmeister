
export const getAuthToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userToken');
    }
    return null;
  };

  export const getAdminAuthToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken');
    }
    return null;
  };

  export const setAuthToken = (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userToken', token);
    }
  };

  export const setAdminAuthToken = (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminToken', token);
    }
  };
  