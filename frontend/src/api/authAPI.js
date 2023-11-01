import api  from '../api/api';
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

export const login=(userData)=>{
    api.post('/auth/signin', userData )
    .then((response)=> {
        if(response?.data?.token){
            localStorage.setItem(response.data.email, response.data.token);
        }

        console.log("response Data ",response.data);
        console.log("response cookies ",response.cookies);
        console.log("response status ",response.status);

        alert(response.data.message);

        if(response.data.userExistInfo){
            navigate("/");
        }
    }).catch((err)=>{
        console.log(err);
        // return err;
    });
}



export const signUp =(userdata)=>{
    api.post('/auth/signup', userdata)
    .then((response)=>{
        console.log(response.data?.result?.token);
        if(response.data?.result){
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            // login({Authorization:response.data.token,userData: response.data});
        }
        navigate('/');
        console.log(response);
        alert(response.data?.message)
        }).catch((err)=>{
            console.log(err);
        })
}
