import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="relative w-full h-screen font-[Urbanist]">
      <Navbar />
     <Image
        src="/black-star.png"
        alt="Black star decoration"
        className="absolute top-[100px] left-9 z-10"
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
      <div className="flex w-full min-h-screen">
        {/* Left side */}
        <div className="w-1/2">
          <div className="w-[844px] h-[550px] ml-[135px] mt-[70px] flex flex-col gap-6">
            <div className="flex items-center gap-2 h-[50px] w-fit rounded-3xl bg-[#8670E526] py-[5px] px-[10px]">
              <div className="bg-white rounded-full px-[15px] py-[5px]">
                <p className="text-[16px] leading-[30px] tracking-[-0.32px] text-[#282C32] font-bold">
                  BC APPA
                </p>
              </div>
              <p className="text-[16px] leading-[30px] tracking-[-0.32px] text-[#8670E5] font-semibold">
                Connect & Save
              </p>
              <Image
                    src='/fireIcon.svg.png' 
                    alt="fire-image"
                    width={16}
                    height={17}
                    />
            </div>
            <h1 className="text-[64px] font-bold leading-[80px] tracking-[-1.28px] text-[#282C32] capitalize w-[700px]">
              Guaranteed Safety for Your Savings
            </h1>

            <p className="font-medium text-[18px] leading-7 tracking-[-0.32px] text-[#282C32] w-[526px]">
              Join a trusted platform where every Rupee you save is fully
              protected, even if a member defaults.
            </p>
            <p className="font-bold text-[18px]  tracking-[-0.32px] text-[#282C32] w-[526px]">
              🚀 Save, Contribute & Grow - With Complete Peace of Mind
            </p>
            <p className="font-bold text-[18px]  tracking-[-0.32px] text-[#282C32] w-[672px]">
              🔹 100% Verified Users 🔹 Insurance-Backed Security 🔹 Real-Time
              Digital Tracking
            </p>

            <button className="bg-[#8670E5] w-[157.99px] h-14 rounded-full flex justify-center items-center gap-[6px]">
              <h2 className="font-semibold text-lg text-white">Join Now</h2>
              <GoArrowRight className="text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Right Side - Mobile Images */}
        <div className="w-1/2 flex items-center justify-center relative">
          <Image
            src="/golden-star.png"
            alt="Golden star decoration"
            className="absolute top-[500px] left-[65px]  z-15"
            width={57}
            height={58}
          />

          <div className="relative w-[500px] h-[500px]">
            <div className="absolute top-[70px] left-[0px] w-[200px] h-[340px] z-5">
              <div className="absolute top-[15px] left-[26px] w-[145px] h-[315px] z-6">
                <Image
                  src="/mobile-left.jpg"
                  alt="Left mobile screen"
                  width={145}
                  height={315}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 w-full h-[340px] z-7">
                <Image
                  src="/mobile-border.png"
                  alt="Left mobile border"
                  width={200}
                  height={340}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="absolute top-[70px] right-[0px] w-[200px] h-[340px] z-5">
              <div className="absolute top-[15px] left-[26px] w-[145px] h-[315px] z-6">
                <Image
                  src="/mobile-right.jpg"
                  alt="Right mobile screen"
                  width={145}
                  height={315}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 w-full h-[340px] z-7">
                <Image
                  src="/mobile-border.png"
                  alt="Right mobile border"
                  width={200}
                  height={340}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="absolute top-[20px] left-[110px] w-[280px] h-[480px] z-10">
              <div className="absolute top-[20px] left-[37px] w-[205px] h-[445px] z-11">
                <Image
                  src="/mobile-screen.jpg"
                  alt="Center mobile screen"
                  width={205}
                  height={445}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 w-full h-[480px] z-12">
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
