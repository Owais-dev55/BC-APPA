'use client'
import Image from "next/image";
import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Overlay from "../Reuseables/Overlay";

const Vision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  })
  return (
    <div className="w-[98%] lg:h-[80vh] bg-[#FAF8FF] rounded-[30px] md:rounded-[50px] mx-auto flex flex-col lg:flex-row justify-between items-center font-[Urbanist] py-10 md:py-0">
      <div className="w-full lg:w-1/2 px-5 sm:px-8 md:px-10 lg:ml-10 flex justify-center items-center">
        <div className="max-w-[576px] w-full flex flex-col gap-4 sm:gap-6 md:gap-7">
          <Overlay text="Mission & Vision" />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Our Vision
          </h1>
          
          <p className="text-base sm:text-lg text-[#858585] w-full max-w-[526px]">
            To eliminate financial insecurity in group savings, ensuring every
            member contributes and gets their fair payout - without any risk.
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 md:mt-6">
            Our Mission
          </h1>
          
          <p className="text-base sm:text-lg text-[#858585] w-full max-w-[526px]">
            To provide a worry-free digital BC platform where every user enjoys
            secure, insured, and seamless savings experiences.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center px-4">
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] aspect-square">
          <Image
            data-aos="zoom-in-left"
            src="/arrow-image.png"
            alt="Vision illustration"
            width={404}
            height={404}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;