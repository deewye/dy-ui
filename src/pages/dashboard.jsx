

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
        </div>
    )
}

export default Dashboard