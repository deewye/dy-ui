import { useState } from "react";



export const useHandleOpen = ()=>{
    const [open, setOpen] = useState(false);
    const opened = ()=>{
        setOpen(!open)
    };
    return{
        open,
        opened
    }
}