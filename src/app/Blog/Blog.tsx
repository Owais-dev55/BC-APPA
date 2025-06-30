import React from "react";
import Overlay from "@/components/Reuseables/Overlay";
import Image from "next/image";

const boxContent = [
  {
    head: "Services that printing at you is important",
    text: "Workplace",
    imageUrl: "/blog1.png",
  },
  {
    head: "A checklist to improve your daily routine",
    text: "Coding",
    imageUrl: "/blog2.png",
  },
  {
    head: "That will help you get 1% better every day",
    text: "Technology",
    imageUrl: "/blog1.png",
  },
];

const Blog = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8 sm:mt-14 gap-10 sm:gap-16 px-4 sm:px-6 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-3 sm:gap-4 text-center">
        <Overlay text="Our Blog" />
        <h2 className="text-4xl sm:text-3xl md:text-4xl  font-bold leading-[1.2] tracking-[-0.5px]">
          Recent Articles And Latest Blog
        </h2>
      </div>

      <div className="w-full max-w-[1450px] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-7">
        {boxContent.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-full sm:max-w-[376px] flex flex-col items-center justify-center gap-5 sm:gap-7 border border-[#E6E6E6] rounded-2xl p-4 sm:p-5"
          >
            <div className="w-full max-w-[326.35px] h-[180px] sm:h-[219px] relative mt-4 sm:mt-7">
              <Image
                src={item.imageUrl}
                alt="blog image"
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute w-28 sm:w-[120px] h-6 sm:h-7 rounded-[100px] flex justify-evenly items-center bg-[#FAF8FF] bottom-2 sm:bottom-0 left-2 sm:left-0">
                <Image
                  src="/file-icon.png"
                  alt="file-icon"
                  width={12}
                  height={9}
                  className="w-3 sm:w-[15px] h-auto"
                />
                <h1 className="text-[#7444FD] text-sm sm:text-[16px] leading-4 tracking-[-0.32px]">
                  {item.text}
                </h1>
              </div>
            </div>
            <h2 className="w-full max-w-[316px] flex justify-center font-semibold text-lg sm:text-xl md:text-[24px] text-[#282C32] tracking-[-0.48px] leading-7 sm:leading-9">
              {item.head}
            </h2>
            <hr className="w-3/4 border-[#E6E6E6]" />
            <div className="w-full flex justify-evenly items-center mb-3 sm:mb-5">
              <div className="flex items-center gap-2">
                <Image
                  src="/admin-icon.png"
                  alt="admin-icon"
                  width={12}
                  height={12}
                  className="w-3 sm:w-[15px] h-auto"
                />
                <p className="text-sm sm:text-base text-[#858585]">By Admin</p>
              </div>
              <Image
                src="/bar.png"
                alt="separator"
                width={1}
                height={16}
                className="h-4"
              />

              <div className="flex items-center gap-2">
                <Image
                  src="/calender-icon.png"
                  alt="calendar-icon"
                  width={12}
                  height={12}
                  className="w-3 sm:w-[15px] h-auto"
                />
                <p className="text-sm sm:text-base text-[#858585]">
                  Sep 30, 2024
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
