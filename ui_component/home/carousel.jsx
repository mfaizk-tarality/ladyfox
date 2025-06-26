"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/bundle";
import "./carousel.css";
const Carousel = () => {
  return (
    <div className="">
      <Swiper
        freeMode={true}
        speed={10000}
        loop={true}
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 0,
          },

          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {Array(20)
          .fill("i")
          .map((_, idx) => {
            return (
              <SwiperSlide key={idx} className="w-[150px]">
                <img
                  className="w-[150px] object-contain"
                  width={150}
                  src={
                    "https://images.www.talentlms.com/wp-content/uploads/2023/07/Google.png"
                  }
                  alt=""
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Carousel;
