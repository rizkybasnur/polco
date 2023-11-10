import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const polco = axios.create({
  baseURL,
});

// Request interceptor
polco.interceptors.request.use(
  (config) => {
    // You can modify the request config here, such as adding headers
    // config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor
polco.interceptors.response.use(
  (response) => {
    // You can handle successful responses here
    return response;
  },
  (error) => {
    // Handle response errors, e.g., by showing a notification to the user
    // You can also redirect the user to an error page or log the error
    console.error("Axios response error:", error);

    return Promise.reject(error);
  }
);

export default polco;
