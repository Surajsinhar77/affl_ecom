import axios from "axios";

const apiForUpload = axios.create({
    baseURL: 'https://affl-ecom-server.vercel.app/',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminAccessToken')}?`, 
        "Content-Type": "multipart/form-data",
    },
})

export default apiForUpload;