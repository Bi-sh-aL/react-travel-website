import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {LogoData} from "./LocationData";
import "./location.scss";

function LogoSlider() {
  return (
    <div className='my-5'>
          <Swiper
          className='logo-swiper'
      modules={[Autoplay, Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
      }}
      breakpoints={{
        810: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
        {LogoData.map((a)=>(
          <SwiperSlide key={a.id} className='logo-slide'>
            <img src={a.img} className='w-100' height={90} alt="" />
          </SwiperSlide>
        ))}
      
    </Swiper>
    </div>
  )
}

export default LogoSlider