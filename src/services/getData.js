import axios from "axios";

// const url = import.meta.env.VITE_URL;
export const api = {
    fetchData: async (url)=>{
        return await axios.get(url)
        .then((res)=> res)
           .catch((err)=> err)
    }
}