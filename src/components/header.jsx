import { Link } from "react-router-dom"
import "./header.css"
import { useState } from "react"
import UserProfil from "./userProfil"

const Header = ({token, user, logout})=>{
    const [open, setOpen] = useState(false)
    return(
        <div className="flex container">
         <h1 className="title">VPS сервер</h1>
        {
            user && token !== null ? <div><button className="btn" onClick={()=>setOpen(true)}>{user.username}</button><button className="btn" onClick={logout}>logout</button></div> :
                      <div><Link to="/login" className="btn">Войти</Link></div> 
        }
        {
            open ? <UserProfil data={user}/> : ""
        }
        </div>
    )
}

export default Header