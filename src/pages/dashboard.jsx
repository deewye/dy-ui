import { Link } from "react-router-dom";
import Card from "../components/card/card"; 
import axios from 'axios'
import Header from "../components/header/header";
import { useState, useEffect } from "react";
import Carusel from "../components/slider";




const Dashboard = ()=>{
    const token = JSON.parse(localStorage.getItem('apiToken')) || null;
    const url = import.meta.env.VITE_URL;
    const [conferences, setConferences] = useState([]);
    const [user, setUser] = useState({})
    function logout(){
     localStorage.removeItem('apiToken');
     window.location.replace("/"); 
    }
    useEffect(()=>{
      axios.get(url + '/conferences').then(res => {
         setConferences( res.data.conferences);
        //  console.log(conferences)
       });

      if(token !== null){
        axios.get(url + '/users/self', 
        {
            headers: {
              Authorization: 'Bearer ' + token 
            }
           }).then(res=>{
          setUser(res.data.user);
             
        })
      } 

   }, [])


    return(
        <div>
          
            <header>
                <Header user={user} logout={logout} token={token}/>
                <Carusel data={conferences}/>
            </header>
                <div className="container">
                <h2> Тарифные планы</h2>    
               <div className="grid">
               {
                    conferences.map((item) =>{
                        return <Card data={item} ontogle/>
                       
                    })
                }
               </div>
                </div>
       </div>
    )
}

export default Dashboard