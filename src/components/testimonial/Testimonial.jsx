import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialData from "./TestimonialData"
import './testimony.scss'
import {Autoplay, Navigation } from "swiper/modules";

function Testimonial() {
  return (
    <div className='t-container'>
        <Swiper
        className='t-swiper'
        modules={[Autoplay, Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        840: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
       {TestimonialData.map((a)=>(
          <SwiperSlide className='t-slide' key={a.id}>
            <div className='text-center'>
                
                <img src={a.avatar} className='rounded-circle' alt="" />
                
                <h4 className='mt-2'>{a.name}</h4>
                <small>{a.country}</small>
                <p className='rank'>{a.ranking}</p>
                <p className='cmnt'>{a.comment}</p>
            </div>
          </SwiperSlide>
       ))} 
      
    </Swiper>
    </div>
  )
}

export default Testimonial