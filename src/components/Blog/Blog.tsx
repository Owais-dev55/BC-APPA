import React from "react";
import Overlay from "../Reuseables/Overlay";
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
    <div className="w-full flex flex-col items-center mt-14 gap-16 px-4 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 text-center">
        <Overlay text="Our Blog" />
        <h2 className="head-h2 mt-4">Recent Articles And Latest Blog</h2>
      </div>

      <div className="w-full max-w-[1450px] flex flex-wrap justify-center gap-7">
        {boxContent.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[376px] h-auto flex flex-col items-center justify-center gap-7 border border-[#E6E6E6] rounded-2xl"
          >
            <div className="w-[326.35px] h-[219px] relative mt-7">
              <Image
                src={item.imageUrl}
                alt="image"
                width={326.35}
                height={219}
              />
              <div className="absolute w-[120px] h-7 rounded-[100px] flex justify-evenly items-center bg-[#FAF8FF] bottom-0 left-0">
                <Image
                  src="/file-icon.png"
                  alt="file-icon"
                  width={15}
                  height={11}
                />
                <h1 className="text-[#7444FD] text-[16px] leading-4 tracking-[-0.32px]">
                  {item.text}
                </h1>
              </div>
            </div>
            <h2 className=" w-[316px] flex justify-center font-semibold text-[#282C32] tracking-[-0.48px] leading-9 text-[24px]">
              {item.head}
            </h2>

            <hr className="w-3/4 border-[#E6E6E6]" />
            <div className="w-full flex justify-evenly mb-5">
              <Image
                src="/admin-icon.png"
                alt="admin-icon"
                width={15}
                height={15}
              />
              <p className="para">By Admin</p>
              <Image src="/bar.png" alt="admin-icon" width={1} height={16} />
              <Image
                src="/calender-icon.png"
                alt="admin-icon"
                width={15}
                height={15}
              />
              <p className="para">Sep 30, 2024</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
