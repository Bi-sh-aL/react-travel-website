import React from 'react'
import { useSwiper } from "swiper/react";

function SwiperNavButtons() {
    const Swiper = useSwiper()
  return (
    <div className='swiper-nav-buttons'>
        <button onClick={()=>Swiper.slidePrev()}>Prev</button>
        <button onClick={()=>Swiper.slideNext()}>Next</button>
    </div>
  )
}

export default SwiperNavButtons