import axios from "axios";

const apiForAdmin = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 100000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminAccessToken')}`, 
        "Content-Type": "application/JSON",

    },
})

export default apiForAdmin;