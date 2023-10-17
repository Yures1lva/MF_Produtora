import { Navigation, Pagination, Scrollbar, A11y, Autoplay,} from 'swiper/modules';
import print01 from "../../assets/imgs/feedback/feedback1.png"
import print02 from "../../assets/imgs/feedback/feedback2.png"
import print03 from "../../assets/imgs/feedback/feedback3.png"
import print04 from "../../assets/imgs/feedback/feedback4.png"
import print05 from "../../assets/imgs/feedback/feedback5.png"


import style from "./Feedback.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/less/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useState, useEffect, CSSProperties } from 'react';

const slides = [print01,print02,print03,print04,print05]



export function Carroussel(){
    const [slidesPerView, setSlidePerView] = useState(3)

    useEffect(() =>{
        function handleRezie(){
            if(window.innerWidth < 620){
                setSlidePerView(1)
            }else if(window.innerWidth < 990){
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
          <div className='container container-box' id="feedback">
              <Swiper
                    style={{
                        '--swiper-navigation-color': 'var(--primary)',
                        '--swiper-pagination-color': 'var(--primary)',
                      } as CSSProperties}
                    className='mySwiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    autoplay={{
                        delay: 2000,
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
        </>
    )
}