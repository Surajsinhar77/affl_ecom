import axios from "axios";

const apiForAdmin = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminAccessToken')}`, 
        "Content-Type": "multipart/form-data",

    },
})

export default apiForAdmin;