"use client"
import Image from "next/image"
import Overlay from "@/components/Reuseables/Overlay"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"

const sliderImages = [
  "/mobile-left.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/mobile-left.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/center-screen.jpg",
]

const OurApp = () => {
  return (
    <section className="w-full bg-[#8670E5] flex flex-col items-center py-8 sm:py-12 md:py-10 lg:py-16 overflow-hidden">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-xs sm:max-w-md md:max-w-4xl text-center px-4">
        <Overlay text="Our App" width={127} color="#FFFFFF" backgroundColor="rgba(255, 255, 255, 0.15)" />
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white">
          Join BC Appa Today - Where Your Money Is Always Protected!
        </h2>
      </div>

      {/* Slider + Frame */}
      <div className="relative w-full max-w-[320px] sm:max-w-[480px] md:max-w-[1600px] mt-8 sm:mt-12 md:mt-20 mx-auto px-2 sm:px-4 md:px-0">
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
            // Small screens - my responsive styling
            0: {
              slidesPerView: 1,
              spaceBetween: 6,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // Large screens - your original breakpoints
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
                className="relative 
                  /* Small screens - my responsive styling */
                  w-[140px] h-[280px] mx-auto
                  xs:w-[160px] xs:h-[320px]
                  sm:w-[180px] sm:h-[360px]
                  /* Medium/Large screens - your original styling */
                  md:w-[255px] md:h-[535px] md:ml-[-2px] md:mx-0
                  lg:w-[200px] lg:h-[505px] lg:ml-24
                  xl:w-[255px] xl:h-[535px] xl:ml-[-4px]
                  2xl:w-[275px] 2xl:h-[565px] 2xl:ml-[4px]
                "
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Phone ${index}`}
                  fill
                  className="rounded-[16px] sm:rounded-[20px] md:rounded-[30px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Center frame overlay */}
        <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div
            className="relative 
            /* Small screens - keep responsive styling */
            w-[170px] h-[310px]
            xs:w-[180px] xs:h-[340px]
            sm:w-[200px] sm:h-[380px]
            /* Medium/Large screens - properly sized to fit over phone images */
            md:w-[295px] md:h-[580px]
            lg:w-[240px] lg:h-[540px]
            xl:w-[290px] xl:h-[570px]
            2xl:w-[325px] 2xl:h-[615px]
          "
          >
            <Image src="/center-frame.png" alt="Phone frame" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurApp
