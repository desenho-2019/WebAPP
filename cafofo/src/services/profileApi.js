import axios from 'axios';

//Todas as requisições irão passar por essa url

const profileApi = axios.create({
    baseURL: "https://5d9e782293e57f0014a8539e.mockapi.io/"
});

export default profileApi;