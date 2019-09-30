import axios from 'axios';

//Todas as requisições irão passar por essa url

const api = axios.create ({ baseURL: ""});

export default api;