import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-nid8.onrender.com',
    timeout: 100000,

    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, 
        "Content-Type": "application/json",
    },
});

export default api;