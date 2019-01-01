import axios from 'axios';

// create our own instance of the axios client
const client = axios.create({
  baseURL: 'http://localhost:3050/api/',
  timeout: 5000,
  responseType: 'json',

  // only catch server errors. This makes it easier to send messages for 
  // the client to consume from the backend.
  validateStatus: status => status >= 200 && status < 500
});

// Add a request interceptor that ensures we get token on every request
// for backend authentication
client.interceptors.request.use(
  config => {
      let token = localStorage.getItem('token');
      // tack on token to request if it exists
      config.params = token ? { ...config.params, token } : { ...config.params };
      return config;
  }, 
  error => {
    console.log(error);
  }
);

export default client;
