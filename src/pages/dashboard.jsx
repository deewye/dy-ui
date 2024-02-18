import { Link } from "react-router-dom";
import Card from "../components/card "; 
import axios from 'axios'
import Header from "../components/header";
import { useState, useEffect } from "react";
import Carusel from "../components/slider";




const Dashboard = ()=>{
    const token = JSON.parse(localStorage.getItem('apiToken')) || null;
    const url = import.meta.env.VITE_URL;
    const[conferences, setConferences] = useState([]);
    function logout(){
     localStorage.removeItem('apiToken');
     window.location.replace("/"); 
    }
    useEffect(()=>{
      axios.get(url + '/conferences').then(res => {
         setConferences( res.data.conferences);
        //   console.log(conferences)
       });
console.log({'Authorization': "Bearer\n" + token})
      if(token !== null){
        axios.get(url + '/users/self', 
        {
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
           }).then(res=>{
            console.log(res.data)
        })
      } 

   }, [])
  
  
    return(
        <div>
          
            <header>
                <Header token={token} logout={logout}/>
                <Carusel data={conferences}/>
            </header>
                <div className="container">
                <h2>Тарифный план</h2>  
                    
               <div className="grid">
               {
                    conferences.map((item) =>{
                        return <Card data={item}/>
                       
                    })
                }
               </div>
                </div>
       </div>
    )
}

export default Dashboard