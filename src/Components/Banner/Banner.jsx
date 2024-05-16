import React from 'react'
import './Banner.css'
import b1 from './b1.jpg'
import b2 from './b2.jpg'
import b3 from './b3.jpg' 
import b4 from './b4.jpg' 
import b5 from './b5.jpg' 


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Banner() {
  return (
    <section className='hero-section'>
        <div className="container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='hero-slide hero-slide-5'>
              <img src={b1} alt="" />
            </SwiperSlide>
            <SwiperSlide className='hero-slide hero-slide-1'>
              <img src={b2} alt="" />
            </SwiperSlide>
            <SwiperSlide className='hero-slide hero-slide-3'>
              <img src={b3} alt="" />
            </SwiperSlide>
            {/* <SwiperSlide className='hero-slide hero-slide-3'>
              <img src={b4} alt="" />
            </SwiperSlide>
            <SwiperSlide className='hero-slide hero-slide-3'>
              <img src={b5} alt="" />
            </SwiperSlide> */}
            
          </Swiper>
        </div>
      </section>
  )
}

export default Banner
