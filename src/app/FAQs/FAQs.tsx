"use client";
import React, { useState } from "react";
import Overlay from "@/components/Reuseables/Overlay";
import Image from "next/image";

const FAQs = () => {
  const [openQuestionId, setOpenQuestionId] = useState<string>("1");

  const handleToggleQuestion = (id: string) => {
    setOpenQuestionId((prev) => (prev === id ? "" : id));
  };

  const questions = [
    {
      id: "1",
      question: "What happens if a member defaults?",
      answer:
        "Your payout is covered by our insurance - you will still receive your full amount.",
    },
    {
      id: "2",
      question: "How do I know my money is safe?",
      answer:
        "Your money is securely held and insured through trusted financial partners.",
    },
    {
      id: "3",
      question: "Are transactions legally protected?",
      answer:
        "Yes, all transactions are governed by legally binding agreements and regulatory compliance.",
    },
    {
      id: "4",
      question: "Can I track my contributions and payouts?",
      answer:
        "Yes, you can track all your contributions and payouts in real time through the app.",
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

      <div className="w-full max-w-[1200px] flex flex-col gap-y-6">
        {questions.map((item) => (
          <div
            key={item.id}
            className="bg-[#FAF8FF] w-full rounded-[10px] p-4 sm:p-6 transition-all duration-300 ease-in-out"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggleQuestion(item.id)}
            >
              <p className="font-semibold text-base sm:text-lg md:text-[16px] leading-7 tracking-[-0.32px] text-[#282C32] capitalize">
                {item.question}
              </p>
              <Image
                src="/arrow-right.png"
                alt="arrow image"
                width={20}
                height={20}
                className={`ml-2 transition-transform duration-300 ${
                  openQuestionId === item.id ? "rotate-90" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openQuestionId === item.id ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-[#858585] text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
