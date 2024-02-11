import "./card.css"

const Card = ({data}) =>{
    return(
        <div className="card">
            <div className="card__top">
                <span>Тарифный план</span>
                <h3 className="card__title">{data.title}</h3>
            </div>
        {
            data.lists.map((item, index) =>{
                return <div className="flex" key={index}>
                    <img src={item.img} alt="" />
                    <div><p>{item.text}</p>
                    <b>{item.value}</b></div>
                    </div>
            } )
        }
       <div className="card__footer">
       <p className="price">{data.price}</p>
        <button>Заказать</button>
       </div>
        </div>
    )
}

export default Card