import React from 'react';
import Image from 'next/image';
import Overlay from '@/components/Reuseables/Overlay'

const boxContent = [
  {
    head: 'No More Risk of Default',
    body: 'Even if a member fails to pay, your money is safe with our insurance-backed protection.',
    imageUrl: '/box-image-1.png',
  },
  {
    head: 'No More Cash Hassles',
    body: 'Everything is managed online, ensuring complete security.',
    imageUrl: '/box-image-2.png',
  },
  {
    head: 'No More Fraud',
    body: 'Verified users, automated tracking, and secure digital transactions eliminate risks.',
    imageUrl: '/box-image-3.png',
  },
];

const Mind = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8 sm:mt-14 gap-10 sm:gap-16 px-4 sm:px-6 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-3 sm:gap-4 text-center">
        <Overlay text="Peace of Mind" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.2] tracking-[-0.5px] mt-3 sm:mt-4">
          Why BC Appa Gives You Complete Peace of Mind
        </h2>
      </div>

      <div className="w-full max-w-[1450px] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-7">
        {boxContent.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-full sm:max-w-[420px] flex flex-col justify-center items-center gap-5 sm:gap-7 border border-[#D5D5D5] rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 text-center 
            hover:shadow-lg transition-shadow duration-300 hover:bg-[#7444FD14] hover:border-[#7444FD26] hover:scale-105"
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
            
            <h2 className="text-xl sm:text-2xl md:text-[33px] font-bold leading-tight tracking-[-0.96px] text-[#282C32] capitalize">
              {item.head}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      
      <h2 className="text-xl sm:text-2xl md:text-[30px] font-bold leading-7 tracking-[-0.32px] text-[#282C32] text-center mt-4 sm:mt-5">
        ✨ Save with Confidence - Your money is always protected!
      </h2>
    </div>
  );
};

export default Mind;