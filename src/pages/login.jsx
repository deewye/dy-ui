
import { useState, useContext } from "react";
import { UserContext } from "../App";


const Login =()=>{
   const {url} = useContext(UserContext);
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
        <div className="signBox flexColumn">
            <h2>Sign in</h2>
            
           <form className="flexColumn" onSubmit={login}>
           <span className="error">{error}</span>
            <label>Your email</label>
            <input type="text" placeholder="Enter your email" 
            value={email} onChange={(e)=> setEmail(e.target.value)}/>
            
            <label>Your password</label>
            <input type="password" placeholder="Enter your password" 
            value={password} onChange={(e)=> setPassword(e.target.value)}/>
           <button className="btn">Button</button>
           </form>
          
        </div>
        </div>
    )
    }



export default Login




