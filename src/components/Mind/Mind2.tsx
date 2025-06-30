import React from 'react';
import Image from 'next/image';
import Overlay from '../Reuseables/Overlay';

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
    <div className="w-full flex flex-col items-center py-10 sm:py-14 gap-10 sm:gap-16 px-4 sm:px-6 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-3 sm:gap-4 text-center">
        <Overlay text="Peace of Mind" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.2] tracking-[-0.5px] mt-3 sm:mt-4">
          What Makes BC Appa Different?
        </h2>
      </div>

      <div className="w-full max-w-[1450px] flex flex-col sm:flex-row flex-wrap justify-center gap-5 sm:gap-7">
        {boxContent.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-full sm:max-w-[600px] flex flex-col justify-center items-center gap-5 sm:gap-7 border border-[#D5D5D5] rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 text-center"
          >
            <div className="flex justify-center items-center">
              <Image
                src={item.imageUrl}
                alt={item.head}
                width={47}
                height={80}
                className="object-contain"
              />
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[33px] font-bold leading-tight tracking-[-0.96px] text-[#282C32] capitalize">
              {item.head}
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium leading-[1.4] sm:leading-[1.5] tracking-[-0.36px] text-[#858585]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-7 tracking-[-0.32px] text-[#282C32] text-center mt-4 sm:mt-5">
        📢 Your Savings Are Safe - Always!
      </h2>
    </div>
  );
};

export default Mind2;