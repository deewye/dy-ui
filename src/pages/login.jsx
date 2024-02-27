
import { useState, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import {Button, Input} from "antd"


const Login =()=>{
  const token = JSON.parse(localStorage.getItem('apiToken')) || null;
  const url = import.meta.env.VITE_URL
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submit, setSubmit] = useState(false); 
     
    function login(e){
        e.preventDefault();
        requery();
        setSubmit(!submit)
      }

      function requery(){
        let body ={
            "email":    email,
            "password":   password
        }
        fetch( url + '/users/login', {
          method:'POST',
          headers: {
            'Content-Type': 'application/json;'
        }, 
        body: JSON.stringify(body)
        })
        .then(response =>{
          if(response.status !== 200){
            response.json().then(result => setError( result.message))
          }
          response.json().then(result=>{
            if(token!==null){
              localStorage.apiToken = JSON.stringify(result.access_token);
            }
            localStorage.setItem('apiToken', JSON.stringify(result.access_token)); 
            window.location.replace("/");
          })
           setSubmit(false)   
      })
        .catch(error =>{
          console.log(error)
        setError('request failed')
      setSubmit(false)})
         
      }
    
    return(
      <div className="login">
        <h1 className="title">VPS сервер</h1>
        <div className="signBox flexColumn">
            <h2>Войти</h2>
            
           <form className="flexColumn" onSubmit={login}>
           <span className="error">{error}</span>
            <Input type="text" placeholder="Email@domen.com" size="large" value={email} 
            onChange={(e)=> setEmail(e.target.value)} variant="borderless" className="input"/>
            <Input.Password  placeholder="Пароль" value={password} size="large" variant="borderless"
            onChange={(e)=> setPassword(e.target.value)}  className="input"/>
            <Button type="primary" htmlType="submit" size="large" loading={submit}>Войти</Button>
           </form>
           <div>
            <p className="text1">Забыли пароль?</p>
            <span className="line"></span>
            </div>
          <div className="flexColumn">
            <p className="text2">Еще нет аккаунта?</p>
           <Button type="link" size="large" href="/signUp" className="account">Создать аккаунта</Button>
           
          </div>
        </div>
        </div>
    )
    }



export default Login




