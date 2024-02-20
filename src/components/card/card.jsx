import "./card.css"
import {lists} from './data'

const Card = ({data}) =>{
    return(
        <div className="card">
            <div className="img">
            <img src={data.previewImageLink} alt="" />
            </div>
            <div className="card__top">
                <p className="card__title">{data.title}</p>
            </div>
        {
            lists.map((item, index) =>{
                return <div className="card-flex" key={index}>
                    <img src={item.img} alt="" />
                    <div><p>{item.text}</p>
                    <b>{item.value}</b></div>
                    </div>
            } )
        }
       <div className="card__footer">
     <p className="price">180 000 сум/мес </p> 
        <button>Заказать</button>
       </div>
        </div>
    )
}

export default Card