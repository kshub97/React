import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // set your base URL
  headers: {
      'Content-Type': 'application/json',
    'X-Custom-Header': 'Shubham-123'
}},
//dynamic token if present in local/backend
(config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
(error) => {
  console.error('Request Error' , error );  
}
);


axiosInstance.interceptors.request.use( (request) => {
    console.log('Request sent:',request );
    return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received:', response);
    return response;
  },
  (error) => {
  if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirect to login.");
    }
    return Promise.reject(error);
  });
export default axiosInstance;