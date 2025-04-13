
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { getAuthToken, getAdminAuthToken } from './token';
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
});

export const userAPI = async (url, method = 'get', data = null) => {
  try {
    const token = getAuthToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios({
      method,
      url: `${baseUrl}${url}`,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    // Nëse ka gabim, mund ta kthejmë message ose object të plotë:
    throw error.response?.data || error.message;
  }
};

/**
 * Kjo funksion bën request me rolin e “admin”/“SUPER_ADMIN”.
 * Automatikisht shton Bearer token nga localStorage ose vendi ku ruani token-in.
 */
export const adminAPI = async (url, method = 'get', data = null) => {
  try {
    const token = getAdminAuthToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios({
      method,
      url: `${baseUrl}${url}`,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
