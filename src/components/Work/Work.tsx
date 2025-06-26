import Overlay from "../Reuseables/Overlay";
import Image from "next/image";

const Work = () => {
  return (
    <div className="h-3/4 w-full overflow-hidden font-[Urbanist] flex justify-center ">
      <div className="max-w-[1450px] w-full mx-auto flex flex-col justify-center items-center gap-8">
        <div className="h-[109px] gap-4 flex flex-col w-[565px] items-center justify-center">
          <Overlay text="How It Work" />
          <div className="w-[565px] flex justify-center items-center">
            <h2 className="head-h2">How it Works?</h2>
          </div>
        </div>

        <div className="w-full max-w-[1450px] h-[248px] flex justify-center items-center relative">
          <Image
            src="/Vector-line.png"
            alt="line"
            width={1450}
            height={218}
            className="w-full h-auto object-contain"
          />

          <div className="w-[30px] h-[30px] border-4 border-[#FFFFFF] rounded-full bg-[#8670E5] absolute bottom-[10px] right-[87%]"></div>
          <div className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute top-[18px] right-[77%] justify-center items-center">
            <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center font-[Urbanist]">
              <div className="flex justify-center items-center w-[56px]">
                <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
                  Step 1
                </p>
              </div>
            </div>
            <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.48px] text-[#282C32] text-center">
              Create or Join a BC
            </h2>
            <p className="para text-center">
              Select your savings circle with confidence, knowing all members
              are verified.
            </p>
          </div>

          <div className="w-[30px] h-[30px] border-4 border-[#FFFFFF] rounded-full bg-[#8670E5] absolute top-[10px] right-[61%]"></div>
          <div className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute bottom-[18px] right-[51%] justify-center items-center">
            <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center font-[Urbanist]">
              <div className="flex justify-center items-center w-[56px]">
                <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
                  Step 2
                </p>
              </div>
            </div>
            <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.48px] text-[#282C32] text-center">
                Set Contributions & Payouts
            </h2>
            <p className="para text-center">
              Transparent terms, with guaranteed safety if someone defaults.
            </p>
          </div>

          <div className="w-[30px] h-[30px] border-4 border-[#FFFFFF] rounded-full bg-[#8670E5] absolute bottom-[10px] right-[37%]"></div>
          <div className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute top-[18px] right-[27%] justify-center items-center">
            <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center font-[Urbanist]">
              <div className="flex justify-center items-center w-[56px]">
                <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
                  Step 3
                </p>
              </div>
            </div>
            <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.48px] text-[#282C32] text-center">
              Enjoy Secure Transactions
            </h2>
            <p className="para text-center">
              Digital deposits & withdrawals, eliminating cash risks.
            </p>
          </div>

          <div className="w-[30px] h-[30px] border-4 border-[#FFFFFF] rounded-full bg-[#8670E5] absolute top-[10px] right-[13%]"></div>
          <div className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute bottom-[18px] right-[3%] justify-center items-center">
            <div className="w-[65px] h-7 rounded-[100px] bg-[#7444FD26] py-1 px-[10px] flex justify-evenly items-center font-[Urbanist]">
              <div className="flex justify-center items-center w-[56px]">
                <p className="text-[16px] leading-7 tracking-[-0.32px] text-[#7444FD] font-medium">
                  Step 4
                </p>
              </div>
            </div>
            <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.48px] text-[#282C32] text-center">
              Your Money is Insured
            </h2>
            <p className="para text-center">
              If a member defaults, you still get paid!
            </p>
          </div>
        </div>

        <h2 className="text-[30px] font-bold leading-7 tracking-[-0.32px] text-[#282C32] text-center mt-5">
          🚀 No fraud, no loss - Just safe, smart saving!
        </h2>
      </div>
    </div>
  );
};

export default Work;
