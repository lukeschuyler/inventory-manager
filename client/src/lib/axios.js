import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3050/api/',
  timeout: 5000,
  responseType: 'json',
  validateStatus: status => status >= 200 && status < 500 // only catch server errors,
});

// Add a request interceptor that ensures we get token on every request
client.interceptors.request.use(
  config => {
      let token = localStorage.getItem('token');
      config.params = token ? { ...config.params, token } : { ...config.params };
      return config;
  }, 
  error => {
    console.log(error);
  }
);

export default client;
