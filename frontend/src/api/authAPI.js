import api  from '../api/api';

export const loginUser =(userData)=>{

    api.post('/auth/signin', userData )
    .then((response) => {
        if(response?.data?.token){
            
        }

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