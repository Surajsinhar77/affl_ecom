import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-nid8.onrender.com',
    timeout: 100000,
});

export default api;