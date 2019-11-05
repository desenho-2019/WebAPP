import axios from 'axios';

//Todas as requisições irão passar por essa url

const api = axios.create ({ 
    baseURL: "https://5dc0cce395f4b90014ddc92c.mockapi.io"
});

export default api;