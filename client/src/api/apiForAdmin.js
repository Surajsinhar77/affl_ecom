import axios from "axios";

const apiForAdmin = axios.create({
<<<<<<< HEAD
    baseURL: 'https://affl-ecom-server.vercel.app/',
=======
    baseURL: 'http://localhost:8000',
>>>>>>> suraj
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminAccessToken')}`, 
        "Content-Type": "application/json",
    },
})

export default apiForAdmin;