

const UserData = ({data})=>{
    return(
        <div className="userData">
            <div>
                <b>Компания</b>
                <p>{data.company}</p>
            </div>
            <div>
                <b>Должность</b>
                <p>{data.companyPosition}</p>
            </div>
            <div>
                <b>Город</b>
                <p>{data.city}</p>
            </div>
            <div>
                <b>Обо мне</b>
                <p>{data.about}</p>
            </div>
        </div>
    )
}

export default UserData