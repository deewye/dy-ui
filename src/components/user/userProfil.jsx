import UserData from "../userData"
import "./userProfil.css"


const UserProfil = ({data, opened})=>{
    return(
        <div className="modal">
            <div className="modalNavigation-left"><div className="account">Профиль</div></div>
            <div className="modalContent">
                <header className="modalHeader">
                    <div className="modalHeader-top">
                        <p className="modalHeader-title">Профиль</p>
                        <div className="close" onClick={opened}>X</div>
                    </div>
                    <div className="modalHeader__subheader">
                    <b className="user">{data.username}</b>
                    <button className="btn">Редактировать</button>
                    </div>
            </header>
            <section className="profil">
                <div className="profil-content">
                    <div className="profil-main">
                        <UserData data={data}/>
                    </div>
                    <div className="profil-footer"><b>Email</b> <p>{data.email}</p></div>
                </div>
                <div className="profil-image"><img src={data.avatarRpm} alt="bu user avatar" /></div>
            </section>
            </div>
        </div>
    )
}

export default UserProfil