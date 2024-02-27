import { Button, Input } from "antd"

 

 const SignUp = ()=>{
    return(
        <div className="login">
             <h1 className="title">VPS сервер</h1>
             <div className="signBox flexColumn">
                <h2>Регистрация</h2>
                <form action="" className="flexColumn">
                <Input type="text" placeholder="Email@domen.com" size="large" variant="borderless"/>
                <Input.Password  placeholder="Пароль" value={password} size="large" variant="borderless"
               onChange={(e)=> setPassword(e.target.value)}  className="input"/>
               <Button type="primary" htmlType="submit" size="large">Создать аккаунта</Button>
                </form>
             </div>
        </div>
    )
 }

 export default SignUp