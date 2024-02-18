 

 const SignUp = ()=>{
    return(
        <div className="login">
             <h1 className="title">VPS сервер</h1>
             <div className="signBox flexColumn">
                <h2>Регистрация</h2>
                <form action="" className="flexColumn">
                <input type="text" placeholder="Email@domen.com" />
                <input type="text" placeholder="Пароль" />
                <button className="send">Создать аккаунта</button>
                </form>
             </div>
        </div>
    )
 }

 export default SignUp