import Image from "next/image";
import { ImFire } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import Overlay from "../Reuseables/Overlay";

const CircularProfiles = () => {


  const checklists = [
    {
      head: 'Guaranteed Protection ',
      body: '- If a member defaults, your payout is covered by insurance.'
    },
    {
      head: '100% Verified Users',
      body: '- Every participant is authenticated, reducing fraud risk.'
    }, 
    {
      head: 'Secure Digital Transactions',
      body: '- No cash exchanges, no hidden risks.'
    },
    {
      head: 'Full Transparency',
      body: ' - All records are digital and trackable in real-time.'
    }
  ]

  return (
    <div className="w-full h-screen flex justify-evenly items-center font-[Urbanist]">
      <div className="relative w-[490px] h-[490px] ">
        <div className="absolute -top-10">
          <Image src="/blue-star.png" alt="star image" width={50} height={50} />
        </div>
        <div className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-4 border-dashed border-purple-200 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[350px] h-[341px] rounded-full bg-[#8670E5]/8 border-[5.74px] 
          border-[rgba(134,112,229,0.1)] flex items-center justify-center">
            <div className="w-[180px] h-[180px] bg-[rgba(134,112,229,0.2)] rounded-full flex items-center justify-center">
              <div className="w-[114px] h-[114px] rounded-full border-4 border-[#8670E5] overflow-hidden">
                <Image
                  src="/image-center.png"
                  alt="women-image"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-8 left-12 w-[86.14px] h-[86.14px] rounded-full border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/image1-ellipse.png"
            alt="Bearded man in casual shirt"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-14 left-1/2 transform translate-x-4 w-[57.42px] h-[57.42px] rounded-full border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/image-up-3.png"
            alt="Woman in left center"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-8 right-12 w-[86.14px] h-[86.14px] rounded-full border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/imgae-up-2.png"
            alt="Woman in left corner"
            width={110}
            height={110}
            className="w-full h-full object-cover transform scale-x-[-1]"
          />
        </div>
        <div className="absolute  right-2 transform  top-7/12 w-[86.14px] h-[86.14px] rounded-full border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/imge-down-2.png"
            alt="Man in left corner"
            width={90}
            height={90}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-14 left-1/3 transform  w-[57.42px] h-[57.42px] rounded-full border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/imge-down-3.png"
            alt="Man at center"
            width={85}
            height={85}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-7/12 w-[86.14px] h-[86.14px] rounded-full border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/imge-down-1.png"
            alt=" man at right"
            width={95}
            height={95}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-1/2 h-[515.96px] flex flex-col gap-5 -mt-10 ml-20">
        <Overlay text='About Our App' />
        <h1 className="head-h2 w-full ">
              🔒 Revolutionizing Savings Circles with 100% Financial Security
            </h1>
            <p className="para w-[526px]">
              Traditional Beesis (BCs) have always been a trusted way to save, but the fear of fraud, mismanagement, and defaults has held many back.
            </p>
            <p className="font-bold text-[16px]  tracking-[-0.32px] text-[#282C32] w-[526px]">
             BC Appa is the ONLY platform where your savings are 100% secure, even if a member defaults - thanks to our insurance-backed protection.
            </p>
         <div className="flex gap-6 w-full flex-col">
      {checklists.map((item, index) => (
        <div key={index} className="flex items-center gap-3 w-full">
          {/* Check icon */}
          <div className="flex-shrink-0">
            <FaCheckCircle className="text-[#1AD079] text-[30px] w-[30px] h-[30px]" />
          </div>

          {/* Head and body in same line */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <h4 className="font-bold text-[18px] leading-7 tracking-[-0.32px] text-[#282C32]">{item.head}</h4>
            <p className="font-medium text-[18px] leading-7 tracking-[-0.32px] text-[#858585]">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default CircularProfiles;
