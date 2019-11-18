import axios from 'axios';
import { getToken } from "./auth"

//Todas as requisições irão passar por essa url

const api = axios.create ({ 
    baseURL: "http://localhost:8990/"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });  

export default api;