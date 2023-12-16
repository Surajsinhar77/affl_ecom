import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8001',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, 
        'Content-Type': 'application/json',
    },
});

export default api;