import { Link } from "react-router-dom"
import "./header.css"
// import { useState } from "react"
import UserProfil from "../user/userProfil"
import { useHandleOpen } from "../../hooks"


const Header = ({token, user, logout})=>{
     const {open, opened} = useHandleOpen();
    return(
        <div className="header-top container">
         <h1 className="title">VPS сервер</h1>
        {
            user && token !== null ? <div><button className="btn" onClick={opened}>{user.username}</button><button className="btn" onClick={logout}>logout</button></div> :
                      <div><Link to="/login" className="btn">Войти</Link></div> 
        }
         {
            open ? <UserProfil data={user} opened={opened}/> : ""
          }
        
        </div>
        
    )
}

export default Header