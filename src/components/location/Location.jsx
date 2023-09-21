import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import LocationData from "./LocationData";
import "./location.scss";
import LogoSlider from "./LogoSlider";

function Location() {
  return (
    <div className="loc">
    <div className="location container my-5">
      <Swiper
        className="location-swiper"
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        breakpoints={{
          810: {
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
        {LocationData.map((a) => (
          <SwiperSlide key={a.id} className="postion-relative location-slide">
            <img src={a.img} className="w-100 loc-img" height={300} alt="" />
            <div className="position-absolute text">
              <img src={a.map} alt="" className="w-100" height={100} />
              <p className="text-light text-center my-2">{a.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <a className="btn bg-success text-light mx-auto explore rounded-0" href="">
        Explore Location
      </a>

    <LogoSlider/>
    </div>
    </div>
  );
}

export default Location;
