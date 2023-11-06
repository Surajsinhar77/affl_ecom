import api  from '../api/api';
// import { useNavigate } from 'react-router-dom';
// import {useAuth}  from '../common/AuthContext';

export const loginUser =(userData)=>{
    console.log("here i cam ")
    // const {login} = useAuth();

    console.log(userData);

    api.post('/auth/signin', userData )
    .then((response) => {
        if(response?.data?.token){
            
        }

        console.log("response Data ", response.data);
        console.log("response cookies ", response.cookies);
        console.log("response status ", response.status);

        alert(response.data.message);

        if(response.data.userExistInfo){
            login(response.data.result);
        }
    }).catch((err)=>{
        console.log(err);
    });
}


export const signUp =(userdata)=>{
    // const navigate = useNavigate();
    api.post('/auth/signup', userdata)
    .then((response)=>{
        console.log(response.data?.result?.token);
        if(response.data?.result){
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            // login({Authorization:response.data.token,userData: response.data});
        }
        // navigate('/');
        console.log(response);

        alert(response.data?.message)
        }).catch((err)=>{
            console.log(err);
        })
}