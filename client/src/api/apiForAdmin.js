import axios from "axios";

const apiForAdmin = axios.create({
    baseURL: 'https://client-jnsy3k5lu-surajsinhar77.vercel.app/',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminAccessToken')}`, 
        "Content-Type": "application/json",
    },
})

export default apiForAdmin;