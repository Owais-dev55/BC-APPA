import React from "react";
import Overlay from "@/components/Reuseables/Overlay";
import Image from "next/image";

const FAQs = () => {
  const questions = [
    {
      question: "How do I know my money is safe?",
      answer: "",
    },
    {
      question: "Are transactions legally protected?",
      answer: "",
    },
    {
      question: "Can I track my contributions and payouts?",
      answer: "",
    },
  ];
  
  return (
    <div className="w-full flex flex-col items-center mt-8 sm:mt-14 gap-8 sm:gap-16 px-4 sm:px-6 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 sm:gap-8 text-center">
        <Overlay text="FAQs" width={84} />
        <h2 className="text-2xl xl:text-5xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Frequently Ask Questions
        </h2>
        <p className="text-base sm:text-lg text-[#858585] max-w-5xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
        </p>
      </div>
      
      <div className="w-full max-w-[1200px] flex flex-col justify-center">
        <div className="bg-[#FAF8FF] w-full rounded-[10px] mb-4 sm:mb-6 p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-base sm:text-lg md:text-[16px] leading-7 tracking-[-0.32px] text-[#282C32] capitalize">
              What happens if a member defaults?
            </p>
            <Image
              src="/arrow-right.png"
              alt="arrow image"
              width={20}
              height={20}
              className="ml-2"
            />
          </div>
          <p className="text-[#858585] text-sm sm:text-base mt-3">
            Your payout is covered by our insurance - you will still receive
            your full amount.
          </p>
        </div>
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF8FF] w-full rounded-[10px] mb-4 sm:mb-6 p-4 sm:p-6"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base sm:text-lg md:text-[16px] leading-7 tracking-[-0.32px] text-[#282C32] capitalize">
                {item.question}
              </p>
              <Image
                src="/arrow-right.png"
                alt="arrow image"
                width={20}
                height={20}
                className="ml-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;