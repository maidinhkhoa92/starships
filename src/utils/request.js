import axios from 'axios';
import CONFIG from 'config';

const request = axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// before send request
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return error;
  }
);

// after send request
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error.response;
  }
);

export default request;
