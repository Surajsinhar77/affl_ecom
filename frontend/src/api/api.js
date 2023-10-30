import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    xsrfCookieName,
    headers: {
        'Authorization': 'Bearer your_access_token', // Set common headers if needed
        'Content-Type': 'application/json',
    },
});

export default api;