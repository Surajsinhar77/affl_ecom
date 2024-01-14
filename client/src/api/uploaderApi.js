import axios from "axios";

const apiForUpload = axios.create({
    baseURL: 'https://backend-nid8.onrender.com',
    // baseURL: 'http://localhost:8000',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminAccessToken')}`, 
        "Content-Type": "application/json",

    },
})

export default apiForUpload;