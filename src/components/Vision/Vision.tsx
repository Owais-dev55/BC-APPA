import Image from "next/image";
import React from "react";
import { ImFire } from "react-icons/im";
import Overlay from "../Reuseables/Overlay";

const Vision = () => {
  return (
    <div className="w-[98%] h-[80vh] bg-[#FAF8FF] rounded-[50px] mx-auto flex justify-between items-center font-[Urbanist]">
      <div className="w-1/2 ml-10 flex justify-center items-center">
        <div className="w-[576.02px] h-[360.16px] flex flex-col gap-7">
         <Overlay text="Mission & Vision" />
          <h1 className="head-h2 ">
            Our Vision
          </h1>
          <p className="para w-[526px]">
            To eliminate financial insecurity in group savings, ensuring every
            member contributes and gets their fair payout - without any risk.
          </p>
          <h1 className="head-h2 ">
            Our Mission
          </h1>
          <p className="para w-[526px]">
            To provide a worry-free digital BC platform where every user enjoys
            secure, insured, and seamless savings experiences.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-[500px] h-[500px]">
          <Image
            src="/arrow-image.png"
            alt="arrow image"
            width={404}
            height={404}
            className="flex items-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
