import axios from 'axios';

import { API_URL } from 'src/constants';
import { getToken, removeToken } from 'src/services';

const HTTP = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

HTTP.interceptors.request.use(
  (config) => {
    const updConfig = { ...config };
    const token = getToken();

    if (token) {
      updConfig.headers.Authorization = `Bearer ${token}`;
    }

    if (updConfig.url?.length && !updConfig.url.includes('?') && updConfig.url[updConfig.url.length - 1] !== '/') {
      updConfig.url += '/';
    }

    return updConfig;
  },
  (error) => Promise.reject(error)
);

HTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status || 0;

    if (status === 401) {
      removeToken();
    }

    return Promise.reject(error);
  }
);

export default HTTP;
