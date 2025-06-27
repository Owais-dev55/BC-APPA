import React from 'react'
import Overlay from '../Reuseables/Overlay'
import Image from 'next/image'

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
    <div className="w-full flex flex-col items-center mt-14 gap-16 px-4 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 text-center">
        <Overlay text="Peace of Mind" />
        <h2 className="head-h2 mt-4">Why BC Appa Gives You Complete Peace of Mind</h2>
      </div>

      <div className="w-full max-w-[1450px] flex flex-wrap justify-center gap-7">
        {boxContent.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[420px] flex flex-col justify-center items-center gap-7 border border-[#D5D5D5] rounded-2xl py-10 px-6 text-center "
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
            <p className="para">{item.body}</p>
          </div>
        ))}
      </div>
      <h2 className="text-[30px] font-bold leading-7 tracking-[-0.32px] text-[#282C32] text-center mt-5">
          ✨ Save with Confidence - Your money is always protected!
        </h2>
    </div>
  );
};

export default Mind;
