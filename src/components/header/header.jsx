import { useNavigate } from "react-router-dom"
import "./header.css"
// import { useState } from "react"
import UserProfil from "../user/userProfil"
import { useHandleOpen } from "../../hooks"
import { Button, Flex, Space} from "antd"
import { UserOutlined } from "@ant-design/icons"


const Header = ({token, user, logout, children})=>{
     const {open, opened} = useHandleOpen();
     const navigate = useNavigate()
    return(
        <header>
          <Flex className="header-top container" justify="space-between" align="center">
         <h1 className="title">VPS сервер</h1>
         
        {
           token && user.id ? <Space direction="horizontal" size="small"><Button onClick={opened} size="large">{user.username}</Button><Button  onClick={logout} size="large">logout</Button></Space> :
                      <div><Button size="large" onClick={()=>navigate("/login")} icon={<UserOutlined/>}>Войти</Button></div> 
        }
         {
            open ? <UserProfil data={user} opened={opened}/> : ""
          }
        
        </Flex>
        {children}
        </header>
        
    )
}

export default Header