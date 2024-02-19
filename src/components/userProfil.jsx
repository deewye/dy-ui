

const UserProfil = ({data})=>{
    return(
        <div className="profil">
            <div className="left"><button>Профиль</button></div>
            <div className="profil__head">
                <div>
                    <p>Профиль</p>
                    <div>X</div>
                </div>
                <div>
                <b>{data.username}</b>
                <button>Редактировать</button>
                </div>
            </div>
            <div className="main">
                <div>
                    <div><b>Email</b> <span>{data.email}</span></div>
                </div>
                <div><img src={data.avatarRpm} alt="" /></div>
            </div>
        </div>
    )
}

export default UserProfil