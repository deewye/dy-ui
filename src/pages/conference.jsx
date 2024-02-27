import { logout } from "./dashboard";
import { useParams } from "react-router-dom"
import Header from "../components/header/header";
import { useEffect, useState } from "react";
import {api} from "../services"
import Banner from "../components/banner";


const Conference = ()=>{
    const {id} = useParams();
    const token = JSON.parse(localStorage.getItem('apiToken')) || null;
    const url = import.meta.env.VITE_URL;
    const [conference, setConference] = useState({})
    const user = {}
    // console.log()
    useEffect(()=>{
        api
      .fetchData(url + '/conference/' +`${id}`)
          .then((res) => setConference(res.data.conference))
    }, [])
    return(
        <div>
            <Header user={user}  logout={logout} token={token}>
                <Banner data={conference}/>
            </Header>
           <div className="container">
            <h1>События</h1>
            </div> 
        </div>
    )
}

export default Conference