import axios from "axios";

const apiForAdmin = axios.create({
    baseURL: 'https://server-3vmhrdv99-surajsinhar77.vercel.app',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminAccessToken')}`, 
        "Content-Type": "application/json",
    },
})

export default apiForAdmin;