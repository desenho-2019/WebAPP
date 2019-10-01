import axios from 'axios';

//Todas as requisições irão passar por essa url

const api = axios.create ({ 
    baseURL: "https://5d921d6a741bd400141169e5.mockapi.io"
});

export default api;