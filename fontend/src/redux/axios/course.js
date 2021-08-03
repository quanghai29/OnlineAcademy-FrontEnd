import axios from 'axios'

const baseHeaders = (config) => ({
  'Content-Type': 'application/json',
  ...config.headers,
});

// Config App Axios
const appAPI = axios.create();
// appAPI.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL
appAPI.defaults.baseURL = 'http://localhost:3001';
appAPI.interceptors.request.use((config) => {
  const token = localStorage.accessToken;
  return {
    ...config,
    headers: {
      ...baseHeaders(config),
      ...(token ? { 'x-access-token': token } : {}),
    },
  };
});

export default appAPI;
