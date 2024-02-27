import { Button } from "antd"
import UserData from "../userData"
import "./userProfil.css"
import {CloseOutlined} from "@ant-design/icons"

const UserProfil = ({data, opened})=>{
    return(
        <div className="modal">
            <div className="modalNavigation-left"><div className="account">Профиль</div></div>
            <div className="modalContent">
                <header className="modalHeader">
                    <div className="modalHeader-top">
                        <p className="modalHeader-title">Профиль</p>
                        <CloseOutlined onClick={opened}/>
                    </div>
                    <div className="modalHeader__subheader">
                    <b className="user">{data.username}</b>
                    <Button size="large" className="btn" rounded>Редактировать</Button>
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