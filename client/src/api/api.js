import axios from 'axios'

const api = axios.create({
    baseURL: 'https://server-3vmhrdv99-surajsinhar77.vercel.app',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, 
        'Content-Type': 'application/json',
    },
});

export default api;