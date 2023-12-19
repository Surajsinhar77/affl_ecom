import axios from 'axios'

const api = axios.create({
<<<<<<< HEAD
    baseURL: 'https://affl-ecom-server.vercel.app/',
=======
    baseURL: 'http://localhost:8000',
>>>>>>> suraj
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, 
        'Content-Type': 'application/json',
    },
});

export default api;