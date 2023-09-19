import React from "react";
import LOGO from "../../assets/main-logo.png";
import MainSliderData from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectFade,Autoplay,Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import './header.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
function Header() {
  return (
    <header className="poition-relative">
     <nav className="navbar navbar-expand-lg navbar-expand-md">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={LOGO} className="w-100" height={50} alt="" /></a>
    <a className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><GiHamburgerMenu className="hamburger" size={30}/></span>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tour Listing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tour Detail</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>


      <Swiper
        // install Swiper modules
        modules={[Autoplay,EffectFade,Navigation]}
        effect={'fade'}
        spaceBetween={0}
        navigation
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          className="swiperMain"
    
      >
        {MainSliderData.map((a) => (
          <SwiperSlide className="swiperSlide position-relative" key={a.id}>
            <div className="position-absolute z-5 text-center">
                <h1 className="text-light">VENTURE OUT</h1>
                <p className="text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea perspiciatis cum dolor nostrum explicabo ad quas ut eligendi asperiores repudiandae?</p>
                <a href="" className="btn bg-success text-light fs-5 mt-3 px-4 py-2 rounded-0">Explore Now</a>
            </div>
            
            <img src={a.slide} alt="" className="w-100 object-fit-cover" height={800} />
            
            
           
          </SwiperSlide>
        ))}
        

      </Swiper>
    </header>
  );
}

export default Header;
