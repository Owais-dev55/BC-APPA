import React from "react";
import Overlay from "@/components/Reuseables/Overlay";
import Image from "next/image";

const Work = () => {
  return (
    <div className="w-full py-12 sm:py-16 md:py-20 font-[Urbanist] bg-gradient-to-b from-white to-[#FAF8FF]">
      <div className="max-w-[1450px] w-full mx-auto flex flex-col justify-center items-center gap-8 px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Overlay text="How It Work" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            How it Works?
          </h2>
        </div>

        <div className="w-full mt-8">
          <div className="hidden lg:block w-full h-[248px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Vector-line.png"
                alt="wave line"
              fill
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="w-[30px] h-[30px] border-4 border-[#FFFFFF] rounded-full bg-[#8670E5] absolute bottom-[10px] right-[87%]"></div>
            <div className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute top-[18px] right-[77%] justify-center items-center">
              <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center">
                <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
                  Step 1
                </p>
              </div>
              <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.48px] text-[#282C32] text-center">
                Create or Join a BC
              </h2>
              <p className="text-[#858585] text-center mt-2 max-w-[280px]">
                Select your savings circle with confidence, knowing all members
                are verified.
              </p>
            </div>
            <div className="w-[30px] h-[30px] border-4 border-[#FFFFFF] rounded-full bg-[#8670E5] absolute top-[10px] right-[61%]"></div>
            <div className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute bottom-[18px] right-[51%] justify-center items-center">
              <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center">
                <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
                  Step 2
                </p>
              </div>
              <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.48px] text-[#282C32] text-center">
                Set Contributions & Payouts
              </h2>
              <p className="text-[#858585] text-center mt-2 max-w-[280px]">
                Transparent terms, with guaranteed safety if someone defaults.
              </p>
            </div>
            <div className="w-[30px] h-[30px] border-4 border-[#FFFFFF] rounded-full bg-[#8670E5] absolute bottom-[10px] right-[37%]"></div>
            <div className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute top-[18px] right-[27%] justify-center items-center">
              <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center">
                <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
                  Step 3
                </p>
              </div>
              <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.48px] text-[#282C32] text-center">
                Enjoy Secure Transactions
              </h2>
              <p className="text-[#858585] text-center mt-2 max-w-[280px]">
                Digital deposits & withdrawals, eliminating cash risks.
              </p>
            </div>
            <div className="w-[30px] h-[30px] border-4 border-[#FFFFFF] rounded-full bg-[#8670E5] absolute top-[10px] right-[13%]"></div>
            <div className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute bottom-[18px] right-[3%] justify-center items-center">
              <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center">
                <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
                  Step 4
                </p>
              </div>
              <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.48px] text-[#282C32] text-center">
                Your Money is Insured
              </h2>
              <p className="text-[#858585] text-center mt-2 max-w-[280px]">
                If a member defaults, you still get paid!
              </p>
            </div>
          </div>

          <div className="lg:hidden w-full">
            <div className="relative pl-8">
              <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-full transform -translate-x-1/2 z-0" />
              <div className="relative mb-10">
                <div className="absolute left-0 top-1 w-6 h-6 border-4 border-white rounded-full bg-[#8670E5] -translate-x-1/2 z-10" />
                <div className="ml-6">
                  <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] flex justify-center items-center mb-2">
                    <p className="text-[#7444FD] text-base font-medium">
                      Step 1
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-[#282C32] mb-2">
                    Create or Join a BC
                  </h3>
                  <p className="text-[#858585]">
                    Select your savings circle with confidence, knowing all
                    members are verified.
                  </p>
                </div>
              </div>
              <div className="relative mb-10">
                <div className="absolute left-0 top-1 w-6 h-6 border-4 border-white rounded-full bg-[#8670E5] -translate-x-1/2 z-10" />
                <div className="ml-6">
                  <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] flex justify-center items-center mb-2">
                    <p className="text-[#7444FD] text-base font-medium">
                      Step 2
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-[#282C32] mb-2">
                    Set Contributions & Payouts
                  </h3>
                  <p className="text-[#858585]">
                    Transparent terms, with guaranteed safety if someone
                    defaults.
                  </p>
                </div>
              </div>
              <div className="relative mb-10">
                <div className="absolute left-0 top-1 w-6 h-6 border-4 border-white rounded-full bg-[#8670E5] -translate-x-1/2 z-10" />
                <div className="ml-6">
                  <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] flex justify-center items-center mb-2">
                    <p className="text-[#7444FD] text-base font-medium">
                      Step 3
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-[#282C32] mb-2">
                    Enjoy Secure Transactions
                  </h3>
                  <p className="text-[#858585]">
                    Digital deposits & withdrawals, eliminating cash risks.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-1 w-6 h-6 border-4 border-white rounded-full bg-[#8670E5] -translate-x-1/2 z-10" />
                <div className="ml-6">
                  <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] flex justify-center items-center mb-2">
                    <p className="text-[#7444FD] text-base font-medium">
                      Step 4
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-[#282C32] mb-2">
                    Your Money is Insured
                  </h3>
                  <p className="text-[#858585]">
                    If a member defaults, you still get paid!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#282C32] text-center">
          🚀 No fraud, no loss - Just safe, smart saving!
        </h2>
      </div>
    </div>
  );
};

export default Work;

