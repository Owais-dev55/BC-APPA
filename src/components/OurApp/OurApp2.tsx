'use client'
import React , {useEffect} from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import Overlay from "../Reuseables/Overlay"

const OurApp2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
    })
  })
  return (
    <div data-aos="fade-down"
     className="w-[95%] sm:w-[97%] lg:w-[99%] h-auto lg:h-[500px] xl:h-[550px] 2xl:h-[600px] bg-[#8670E5] mt-8 sm:mt-12 lg:mt-20 font-[Urbanist] flex flex-col lg:flex-row rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] mx-auto relative overflow-hidden py-8 lg:py-0">
      {/* Decorative Corner */}
      <div className="absolute top-0 left-0">
        <Image
          src="/right-bottom.png"
          alt="Decorative Corner"
          width={373}
          height={147}
          className="w-[200px] h-[80px] sm:w-[250px] sm:h-[100px] md:w-[300px] md:h-[120px] lg:w-[320px] lg:h-[125px] xl:w-[350px] xl:h-[135px] 2xl:w-[373px] 2xl:h-[147px]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center px-6 sm:px-8 lg:pl-10 xl:pl-12 2xl:pl-14 lg:mt-8 xl:mt-12 2xl:mt-14 order-2 lg:order-1">
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-5 w-full text-center lg:text-left">
          <Overlay text="Our App" width={127} color="#FFFFFF" backgroundColor="rgba(255 ,255, 255, 0.15)" />

          <h2
            style={{ color: "white" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight tracking-[-0.48px] max-w-full lg:max-w-[600px] xl:max-w-[650px] 2xl:max-w-[700px]"
          >
            Join BC Appa Today - Where Your Money Is Always Protected!
          </h2>

          <p className="font-medium text-sm sm:text-base lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-6 sm:leading-7 lg:leading-7 tracking-[-0.32px] text-white max-w-full lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[650px]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 mt-2 items-center lg:items-start justify-center lg:justify-start">
            <Image
              src="/GoogleStore.png"
              alt="Google Store"
              width={190}
              height={55}
              className="w-[160px] h-[46px] sm:w-[170px] sm:h-[49px] lg:w-[160px] lg:h-[46px] xl:w-[175px] xl:h-[51px] 2xl:w-[190px] 2xl:h-[55px]"
            />
            <Image
              src="/AppStore.png"
              alt="App Store"
              width={190}
              height={55}
              className="w-[160px] h-[46px] sm:w-[170px] sm:h-[49px] lg:w-[160px] lg:h-[46px] xl:w-[175px] xl:h-[51px] 2xl:w-[190px] 2xl:h-[55px]"
            />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] flex items-center justify-center relative order-1 lg:order-2 mb-4 lg:mb-0">
        {/* Main App Image */}
        <Image
          src="/Graphite.png"
          alt="App Preview"
          width={600}
          height={600}
          className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] object-contain relative z-10"
        />

        {/* Shadow Image */}
        <Image
          src="/center-shadow.png"
          alt="App Shadow"
          width={500}
          height={270}
          className="absolute z-0 bottom-8 sm:bottom-12 lg:bottom-16 xl:bottom-20 2xl:bottom-20 left-1/2 -translate-x-1/2 w-[250px] h-[135px] sm:w-[300px] sm:h-[162px] md:w-[350px] md:h-[189px] lg:w-[350px] lg:h-[189px] xl:w-[420px] xl:h-[227px] 2xl:w-[500px] 2xl:h-[270px]"
        />
      </div>
    </div>
  )
}

export default OurApp2
