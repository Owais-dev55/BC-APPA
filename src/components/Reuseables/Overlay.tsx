import Image from "next/image";
import React from "react";

interface txtProp {
  text: string;
}

const Overlay = ({ text }: txtProp) => {
  return (
    <div className="w-[172.99px] h-9 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center font-[Urbanist]">
      <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
        {text}
      </p>
      <Image
      src='/fireIcon.svg.png' 
      alt="fire-image"
      width={16}
      height={17}
      />
    </div>
  );
};

export default Overlay;
