import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination} from 'swiper';



const Carusel = ({data})=>{
    return(
        <div className='sliderBox'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        >
       {
        data.map((item)=>{
            return  <SwiperSlide>
               <img src={item.imageLink} alt=""/>
              <p>{item.title}</p>
              
              </SwiperSlide>
        })
       }
        
      </Swiper>
        </div>
    )
}

export default Carusel