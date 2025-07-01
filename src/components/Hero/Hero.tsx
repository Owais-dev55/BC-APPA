'use client'
import Image from "next/image";
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar/Navbar";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="relative w-full min-h-screen font-[Urbanist] overflow-hidden">
      <Navbar />
      <Image
      style={{ animation: 'spin 5s linear infinite' }}
        src="/black-star.png"
        alt="Black star decoration"
        className="absolute top-[80px] sm:top-[90px] lg:top-[100px] left-4 sm:left-6 lg:left-6 xl:left-8 2xl:left-9 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[46px] xl:w-[50px] xl:h-[52px] 2xl:w-[57px] 2xl:h-[58px]"
        width={57}
        height={58}
      />

      <Image
        src="/left-right-gradient-image.png"
        alt="Left gradient background"
        fill
        className="object-cover -z-20"
      />
      <Image
        src="/hero-right-gradient-image.png"
        alt="Right gradient background"
        fill
        className="object-cover -z-10"
      />

      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-106px)] pb-8 sm:pb-12 lg:pb-16">
        <div data-aos="fade-right" className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-0 py-8 lg:py-0">
          <div className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] xl:max-w-[780px] 2xl:max-w-[844px] h-auto lg:h-auto xl:h-[500px] 2xl:h-[550px] lg:ml-[60px] xl:ml-[100px] 2xl:ml-[135px] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[70px] flex flex-col gap-4 sm:gap-5 lg:gap-5 xl:gap-6 2xl:gap-6 text-center lg:text-left">
            <div className="flex items-center gap-2 h-auto lg:h-[45px] xl:h-[48px] 2xl:h-[50px] w-fit rounded-3xl bg-[#8670E526] py-[5px] px-[10px] mx-auto lg:mx-0">
              <div className="bg-white rounded-full px-[10px] sm:px-[12px] lg:px-[15px] py-[5px]">
                <p
                  className="text-sm sm:text-base lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[30px] tracking-[-0.32px] 
                text-[#282C32] font-bold"
                >
                  BC APPA
                </p>
              </div>
              <p className="text-sm sm:text-base lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[30px] tracking-[-0.32px] text-[#8670E5] font-semibold">
                Connect & Save
              </p>
              <Image
                src="/fireIcon.svg.png"
                alt="fire-image"
                width={16}
                height={17}
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[14px] lg:h-[15px] xl:w-[15px] xl:h-[16px] 2xl:w-4 2xl:h-[17px] animate-pulse"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight sm:leading-tight lg:leading-[60px] xl:leading-[70px] 2xl:leading-[80px] tracking-[-1.28px] text-[#282C32] capitalize w-full lg:w-[600px] xl:w-[600px] 2xl:w-[600px]">
              Guaranteed Safety for Your Savings
            </h1>
            <p className="font-medium text-sm sm:text-base lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-5 sm:leading-6 lg:leading-6 xl:leading-7 2xl:leading-7 tracking-[-0.32px] text-[#282C32] w-full lg:w-[450px] xl:w-[490px] 2xl:w-[526px]">
              Join a trusted platform where every Rupee you save is fully
              protected, even if a member defaults.
            </p>

            <p className="font-bold text-sm sm:text-base lg:text-[16px] xl:text-[17px] 2xl:text-[18px] tracking-[-0.32px] text-[#282C32] w-full lg:w-[450px] xl:w-[490px] 2xl:w-[526px]">
              🚀 Save, Contribute & Grow - With Complete Peace of Mind
            </p>

            <p className="font-bold text-xs sm:text-sm lg:text-[16px] xl:text-[17px] 2xl:text-[18px] tracking-[-0.32px] text-[#282C32] w-full lg:w-[580px] xl:w-[620px] 2xl:w-[672px]">
              🔹 100% Verified Users 🔹 Insurance-Backed Security 🔹 Real-Time
              Digital Tracking
            </p>

            <button className="bg-[#8670E5] w-full sm:w-[200px] lg:w-[140px] xl:w-[150px] 2xl:w-[157.99px] h-12 sm:h-14 lg:h-12 xl:h-14 2xl:h-14 rounded-full flex justify-center items-center gap-[6px] mx-auto lg:mx-0 mt-2 lg:mt-0 ">
              <h2 className="font-semibold text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-lg text-white">
                Join Now
              </h2>
              <GoArrowRight className="text-white text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-lg" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center relative px-4 lg:px-0 py-8 lg:py-0 min-h-[400px] sm:min-h-[500px] lg:min-h-0">
          <Image
          style={{ animation: 'spin 5s linear infinite' }}
            src="/golden-star.png"
            alt="Golden star decoration"
            className="absolute bottom-[50px] sm:bottom-[80px] lg:top-[420px] xl:top-[460px] 2xl:top-[500px] left-[20px] sm:left-[40px] lg:left-[45px] xl:left-[55px] 2xl:left-[65px] z-15 w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[46px] xl:w-[50px] xl:h-[52px] 2xl:w-[57px] 2xl:h-[58px]"
            width={57}
            height={58}
          />

          <div data-aos="fade-left" className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[420px] xl:w-[460px] 2xl:w-[500px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[420px] xl:h-[460px] 2xl:h-[500px] flex-shrink-0">
            <div className="absolute top-[40px] sm:top-[50px] lg:top-[60px] xl:top-[65px] 2xl:top-[70px] left-[0px] w-[100px] sm:w-[130px] md:w-[160px] lg:w-[170px] xl:w-[185px] 2xl:w-[200px] h-[170px] sm:h-[220px] md:h-[270px] lg:h-[290px] xl:h-[315px] 2xl:h-[340px] z-5">
              <div className="absolute top-[8px] sm:top-[10px] lg:top-[12px] xl:top-[13px] 2xl:top-[15px] left-[12px] sm:left-[18px] lg:left-[22px] xl:left-[24px] 2xl:left-[26px] w-[75px] sm:w-[95px] md:w-[120px] lg:w-[125px] xl:w-[135px] 2xl:w-[145px] h-[155px] sm:h-[200px] md:h-[250px] lg:h-[270px] xl:h-[290px] 2xl:h-[315px] z-6">
                <Image
                  src="/mobile-left.jpg"
                  alt="Left mobile screen"
                  width={145}
                  height={315}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 w-full h-full z-7">
                <Image
                  src="/mobile-border.png"
                  alt="Left mobile border"
                  width={200}
                  height={340}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="absolute top-[40px] sm:top-[50px] lg:top-[60px] xl:top-[65px] 2xl:top-[70px] right-[0px] w-[100px] sm:w-[130px] md:w-[160px] lg:w-[170px] xl:w-[185px] 2xl:w-[200px] h-[170px] sm:h-[220px] md:h-[270px] lg:h-[290px] xl:h-[315px] 2xl:h-[340px] z-5">
              <div className="absolute top-[8px] sm:top-[10px] lg:top-[12px] xl:top-[13px] 2xl:top-[15px] left-[12px] sm:left-[18px] lg:left-[22px] xl:left-[24px] 2xl:left-[26px] w-[75px] sm:w-[95px] md:w-[120px] lg:w-[125px] xl:w-[135px] 2xl:w-[145px] h-[155px] sm:h-[200px] md:h-[250px] lg:h-[270px] xl:h-[290px] 2xl:h-[315px] z-6">
                <Image
                  src="/mobile-right.jpg"
                  alt="Right mobile screen"
                  width={145}
                  height={315}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 w-full h-full z-7">
                <Image
                  src="/mobile-border.png"
                  alt="Right mobile border"
                  width={200}
                  height={340}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="absolute top-[10px] sm:top-[15px] lg:top-[17px] xl:top-[18px] 2xl:top-[20px] left-[50%] -translate-x-1/2 w-[140px] sm:w-[180px] md:w-[225px] lg:w-[240px] xl:w-[260px] 2xl:w-[280px] h-[240px] sm:h-[310px] md:h-[365px] lg:h-[400px] xl:h-[440px] 2xl:h-[480px] z-10">
              <div className="absolute top-[10px] sm:top-[12px] lg:top-[17px] xl:top-[18px] 2xl:top-[20px] left-[50%] -translate-x-1/2 w-[105px] sm:w-[135px] md:w-[165px] lg:w-[175px] xl:w-[190px] 2xl:w-[205px] h-[220px] sm:h-[285px] md:h-[335px] lg:h-[370px] xl:h-[405px] 2xl:h-[445px] z-11">
                <Image
                  src="/mobile-screen.jpg"
                  alt="Center mobile screen"
                  width={205}
                  height={445}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 w-full h-full z-12">
                <Image
                  src="/mobile-border.png"
                  alt="Center mobile border"
                  width={280}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
