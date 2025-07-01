"use client";
import React from "react";
import Image from "next/image";
import Overlay from "@/components/Reuseables/Overlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const sliderImages = [
  "/mobile-left.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/mobile-left.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/center-screen.jpg",
];

const OurApp = () => {
  return (
    <section className="w-full bg-[#8670E5] flex flex-col items-center py-10 sm:py-16 overflow-hidden">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-5 mt-8 sm:mt-10 max-w-4xl text-center px-4">
        <Overlay
          text="Our App"
          width={127}
          color="#FFFFFF"
          backgroundColor="rgba(255, 255, 255, 0.15)"
        />
        <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white">
          Join BC Appa Today - Where Your Money Is Always Protected!
        </h2>
      </div>

      {/* Slider + Frame */}
      <div className="relative w-full max-w-[1600px] mt-20 mx-auto">
        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          spaceBetween={8}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div 
              className="relative w-[225px] ml-20 sm:ml-24 2xl:ml-[4px] xl:ml-[-4px] md:ml-[-2px]  h-[470px] sm:w-[200px] sm:h-[505px] md:w-[255px] md:h-[535px] 2xl:w-[275px] 2xl:h-[565px]"
              
              >
                <Image
                  src={src}
                  alt={`Phone ${index}`}  
                  fill
                  className="rounded-[30px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Center frame overlay */}
        <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative w-[280px] md:w-[320px] 2xl:w-[340px] aspect-[340/620]">
            <Image
              src="/center-frame.png"
              alt="Phone frame"
              fill
              className="object-contain"  
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApp;

