import api  from './api';

export const loginUser =(userData)=>{
    const result = api.post('/auth/signin', userData )
    .then((response) => {

        if(response?.data?.result){
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
            if(response.status === 201){
                if(response?.data?.result){
                    const  dataa = { user: true , accessToken :response.data.result.token, userData : response.data.result}
                    return dataa;
                }
            }
            throw new Error({message: response.data.error});
        }).catch((err)=>{
            let message
            if(err.response?.status === 409){
                message = err.response.data.error;
            }else{
                message = err.message;
            }
            return {user: false , message: message};
        })
    return result;
}
