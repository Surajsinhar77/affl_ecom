import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 100000,

    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, 
        "Content-Type": "application/json",
    },
});

export default api;