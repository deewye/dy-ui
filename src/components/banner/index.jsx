import "./banner.css"
import { Button } from "antd"

const Banner = ({data})=>{
    return (
        <div className="banner">
           <div className="banner__img">
                <img src={data.imageLink} alt="" />
            </div>
            <div className="banner__text flexColumn">
                <p className="title">{data.title}</p>
                <Button type="primary" size="large">Перейти в главный зал</Button>
            </div> 
        </div>
    )
}

export default Banner