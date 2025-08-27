import axios from 'axios';

const API_KEY = 'dadb203a4f8f4a98bb5dd8f1f71e1445';
const BASE_URL = 'https://newsapi.org/v2';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
    country: 'us',
    timeout: 30000, // 30s timeout
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors
axiosClient.interceptors.response.use(
  response => {
    console.log('API Response:', response?.data || response);
    return response;
  },
  error => {
    console.error('API Error:', error?.response?.data || error.message);
    return Promise.reject(error);
  },
);

