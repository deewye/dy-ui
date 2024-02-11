import Card from "../components/card ";
import {data} from "./data"


const Dashboard = ()=>{
    const token = JSON.parse(localStorage.getItem('apiToken'));

    if ( token === null) {
        window.location.replace("/login");
        return
    }
    function logout(){
     localStorage.removeItem('apiToken');
     window.location.replace("/"); 
    }
    return(
        <div>
            <header><div className="container"><button className="logout" onClick={logout}>logout</button></div></header>
                <div className="container">
                    <h1>VPS сервер</h1>
               <div className="grid">
               {
                    data.map((item) =>{
                        return <Card data={item} key={item.id}/>
                    })
                }
               </div>
                </div>
       </div>
    )
}

export default Dashboard