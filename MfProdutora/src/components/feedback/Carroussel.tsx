import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import print01 from "../../assets/imgs/feedback/print01.png"
import print02 from "../../assets/imgs/feedback/print02.png"
import print03 from "../../assets/imgs/feedback/print03.png"


import style from "./Feedback.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/less/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const slides = [print01,print02,print03]

export function Carroussel(){
    return(
        <>
          <div className='container' id="feedback">
              <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
                      >
              <SwiperSlide><div ><img className={style.imgCarroussel} src={print01} /></div></SwiperSlide>
              <SwiperSlide><div ><img className={style.imgCarroussel} src={print02} /></div></SwiperSlide>
              <SwiperSlide><div ><img className={style.imgCarroussel} src={print01} /></div></SwiperSlide>
              <SwiperSlide><div ><img className={style.imgCarroussel} src={print01} /></div></SwiperSlide>
              <SwiperSlide><div ><img className={style.imgCarroussel} src={print01} /></div></SwiperSlide>
              <SwiperSlide><div ><img className={style.imgCarroussel} src={print01} /></div></SwiperSlide>
              <SwiperSlide><div ><img className={style.imgCarroussel} src={print01} /></div></SwiperSlide>
             
              </Swiper>
          </div>    
    <br />
    <br />
    <br />
    <br />
        </>
    )
}