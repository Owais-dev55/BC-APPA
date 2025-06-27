import React from 'react'
import Overlay from '../Reuseables/Overlay'
import Image from 'next/image'

const boxContent = [
  {
    head: 'BC Appa',
    body: 'Even if a member fails to pay, your money is safe with our insurance-backed protection.',
    imageUrl: '/shield.png',
  },
  {
    head: 'No More Cash Hassles',
    body: 'Everything is managed online, ensuring complete security.',
    imageUrl: '/mobile-icon.png',
  },

];

const Mind2 = () => {
  return (
    <div className="w-full flex flex-col items-center  gap-16 px-4 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 text-center">
        <Overlay text="Peace of Mind" />
        <h2 className="head-h2 mt-4">What Makes BC Appa Different?</h2>
      </div>

      <div className="w-full max-w-[1450px] flex flex-wrap justify-center gap-7">
        {boxContent.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[600px] flex flex-col justify-center items-center gap-7 border border-[#D5D5D5] rounded-2xl py-10 px-6 text-center "
          >
            <Image
              src={item.imageUrl}
              alt="box-image"
              width={47}
              height={80}
            />
            <h2 className="text-[33px] font-bold leading-[100%] tracking-[-0.96px] text-[#282C32] capitalize">
              {item.head}
            </h2>
            <p className="font-medium text-[27px] leading-[100%] tracking-[-0.36px] text-[#858585]">{item.body}</p>
          </div>
        ))}
      </div>
      <h2 className="text-[30px] font-bold leading-7 tracking-[-0.32px] text-[#282C32] text-center mt-5">
      📢 Your Savings Are Safe - Always!
        </h2>
    </div>
  );
};

export default Mind2;
