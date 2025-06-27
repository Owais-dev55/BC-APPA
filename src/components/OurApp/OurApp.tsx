import React from "react";
import Overlay from "../Reuseables/Overlay";
import Image from "next/image";

const OurApp = () => {
  return (
    <div className="w-full h-auto bg-[#8670E5] mt-20 flex flex-col items-center">
      <div className="flex flex-col items-center gap-5 mt-10">
        <Overlay
          text="Our App"
          width={127}
          color="#FFFFFF"
          backgroundColor="rgba(255 ,255, 255, 0.15)"
        />
        <h2 style={{ color: "white" }} className="head-h2">
          Join BC Appa Today - Where Your Money Is Always Protected!
        </h2>
      </div>
      <div className="w-full h-[750px] gap-8 flex justify-around  mt-20 ">
        <div className="h-[620px] w-[300px]">
          <Image
            src="/mobile-left.jpg"
            alt="Image"
            width={258}
            height={620}
            className="object-cover rounded-[37px]"
          />
        </div>
        <div className="h-[620px] w-[300px]">
          <Image
            src="/slider2.jpg"
            alt="Image"
            width={258}
            height={620}
            className="object-cover rounded-[37px]"
          />
        </div>
        <div className="h-[800px] w-[340px] -mt-5 relative z-0">
          <Image
            src="/center-frame.png"
            alt="Image"
            width={340}
            height={800}
            className="rounded-[37px] z-0"
          />
          <div className="absolute inset-0 top-[-196px] flex items-center justify-center -z-10">
            <Image
              src="/center-screen.jpg"
              alt="Image"
              width={258}
              height={600}
              className="rounded-[37px] "
            />
          </div>
        </div>

        <div className="h-[620px] w-[300px]">
          <Image
            src="/slider3.jpg"
            alt="Image"
            width={258}
            height={620}
            className="object-cover rounded-[37px]"
          />
        </div>
        <div className="h-[620px] w-[300px]">
          <Image
            src="/slider4.jpg"
            alt="Image"
            width={258}
            height={620}
            className="object-cover rounded-[37px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurApp;
