import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { RxArrowTopRight } from "react-icons/rx";


import { ServiceData } from "./index.js";
const Caroucel = () => {
  
  return (
    <div className="flex items-center justify-center flex-col h-[700px] -mt-44 -mb-20 ">
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={false} // Disable pagination dots
      autoplay={{
        delay: 2500, // Time between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="w-full"
      >
      {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="flex flex-col gap-6 mb-20 group relative text-white px-6 py-8 h-[400px] w-[215px] lg:h-[400px] sm:w-[450px] overflow-hidden cursor-pointer border-4  border-[#0FB9B6] rounded-xl mr-3 sm:mr-60">
            <div
              className="absolute inset-0 bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex flex-col gap-3">
            <div className="flex items-center flex-col sm:flex-row">
            <item.icon className="text-[#0FB9B6] w-[60px] h-[60px] mb-2 sm:mb-0 sm:mr-2" />
            <span className="text-[#0FB9B6] text-6xl sm:ml-[280px]">{item.number}</span>
            </div>
              <h1 className="text-center text-xl lg:text-2xl font-medium mb-2 mt-3">{item.title} </h1>
              <p className="text-center lg:text-[16px] text-black font-medium ">{item.content} </p>
            </div>
            <RxArrowTopRight className="absolute bottom-5 left-5 w-[45px] h-[45px] text-[#0FB9B6] group-hover:rotate-45 duration-100" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Caroucel;
