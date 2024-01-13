import axios from "axios";

const apiForAdmin = axios.create({
    baseURL: 'http://localhost:8000',
<<<<<<< HEAD
    timeout: 1000,
=======
    timeout: 100000,
>>>>>>> 518898d19968b22717f24d3365a9ea6739f44340
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminAccessToken')}`, 
        "Content-Type": "application/json",
    },
})

export default apiForAdmin;