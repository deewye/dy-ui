import axios from "axios"


    const url = import.meta.env.VITE_URL;


 export const getUser = {
    fetchUser: async (token)=>{
        return await axios.get(url + '/users/self', {
            headers: {
                    Authorization: 'Bearer ' + token 
                }
        }).then((res)=> res)
           .catch((err)=> err)         
    }
 } 