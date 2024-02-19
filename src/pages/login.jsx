
import { useState, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";


const Login =()=>{
  
  const url = import.meta.env.VITE_URL
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   
    function login(e){
        e.preventDefault();
        requery();
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
            localStorage.setItem('apiToken', JSON.stringify(result.access_token)); 
            window.location.replace("/");
          })   
      })
        .catch(error =>{
          console.log(error)
        setError('request failed')})
      }
    
    return(
      <div className="login">
        <h1 className="title">VPS сервер</h1>
        <div className="signBox flexColumn">
            <h2>Войти</h2>
            
           <form className="flexColumn" onSubmit={login}>
           <span className="error">{error}</span>
            <input type="text" placeholder="Email@domen.com" 
            value={email} onChange={(e)=> setEmail(e.target.value)}/>
            
            <input type="password" placeholder="Пароль" 
            value={password} onChange={(e)=> setPassword(e.target.value)}/>
           <button className="send">Войти</button>
           </form>
           <div>
            <p className="text1">Забыли пароль?</p>
            <span className="line"></span>
            </div>
          <div className="flexColumn">
            <p className="text2">Еще нет аккаунта?</p>
           <Link to="/signUp"> <button className="account">Создать аккаунта</button></Link>
          </div>
        </div>
        </div>
    )
    }



export default Login




