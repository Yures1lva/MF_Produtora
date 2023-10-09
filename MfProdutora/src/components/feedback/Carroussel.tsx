import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
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
import { useState, useEffect } from 'react';

const slides = [print01,print02,print03,print01,print02,print03]



export function Carroussel(){
    const [slidesPerView, setSlidePerView] = useState(3)

    useEffect(() =>{
        function handleRezie(){
            if(window.innerWidth < 620){
                setSlidePerView(1)
            }else if(window.innerWidth < 920){
                setSlidePerView(2)
            }else{
                setSlidePerView(3)
            }
        }
        handleRezie()
        window.addEventListener("resize", handleRezie)
        return ()=> {
            window.removeEventListener("resize", handleRezie)
        }
    }, [])

    return(
        <>
          <div className='container' id="feedback">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
              >
              {slides.map((item) => (
                <SwiperSlide>
                    <img className={style.imgCarroussel} 
                    src={item}>
                    </img>
                </SwiperSlide>
              ))}
              </Swiper>
          </div>    
    <br />
    <br />
    <br />
    <br />
        </>
    )
}