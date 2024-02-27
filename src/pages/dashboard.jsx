import { Link } from "react-router-dom";
import Card from "../components/card/card"; 
import axios from 'axios'
import Header from "../components/header/header";
import { useState, useEffect } from "react";
import Carusel from "../components/slider";
import {getUser, api} from "../services"

export function logout(){
  localStorage.removeItem('apiToken');
  window.location.replace("/"); 
 }

const Dashboard = ()=>{
    const token = JSON.parse(localStorage.getItem('apiToken')) || null;
    const url = import.meta.env.VITE_URL;
    const [conferences, setConferences] = useState([]);
    const [user, setUser] = useState({});
   
    useEffect(()=>{
      
      api
      .fetchData(url + '/conferences')
          .then((res) => setConferences(res.data.conferences))

       if(token !== null){
       
          getUser
          .fetchUser(token)
          .then((res) => setUser(res.data.user))
          console.log(user)
       }
       
       
   }, [])


    return(
        <div>
          
            
              <Header user={user} logout={logout} token={token}>
                <Carusel data={conferences}/>
              </Header>
                
            
              <div className="container">
                <h1> Тарифные планы</h1>    
              <div className="grid">
               {
                    conferences.map((item) =>{
                        return <Link to={`conference/${item.conferenceId}`}><Card data={item}/></Link>
                       
                    })
                }
               </div>
                </div>
       </div>
    )
}

export default Dashboard