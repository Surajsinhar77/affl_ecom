import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
<<<<<<< HEAD
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, 
        'Content-Type': 'application/json',
    },
=======
    timeout: 100000,
>>>>>>> 518898d19968b22717f24d3365a9ea6739f44340
});

export default api;