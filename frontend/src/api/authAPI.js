import api  from './api';

export const loginUser =(userData)=>{
    const result = api.post('/auth/signin', userData )
    .then((response) => {
        if(response?.data?.result){
            console.log("This is the resp data :",response.data)
            const data = { user: response.data.userExistInfo , accessToken :response.data.result.token, userData : response.data.result};
            return data;
        }

        if(!response.data.userExistInfo){
            console.log(response.data, " \n");
        }

    }).catch((err)=>{
        console.log(err);
        return { user: false , accessToken : null, userData : null};
    });
    return result;
}


export const signUp = (userdata) => {
    const result = api.post('/auth/signup', userdata)
    .then((response)=>{

        if(response?.data?.result){
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.result.token}`;
            const  data = { user: false , accessToken :response.data.token}
            return data;
        }
        alert(response.data?.message);
        return {user: false , accessToken : response.data.token, userData : null };
        }).catch((err)=>{
            console.log(err);
            alert(err,message);
            return false;
        })
    return result;
}
