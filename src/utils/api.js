import axios from 'axios';
import { getStoredAuthToken } from './authToken';

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:1337/';

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use((request) => {
  const authToken = getStoredAuthToken();
  if (authToken) {
    request.headers.Authorization = `Bearer ${authToken.jwt}`;
  }
  return request;
});

export default axios;