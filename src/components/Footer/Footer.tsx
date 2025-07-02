import Image from "next/image";
import { AiFillApple } from "react-icons/ai";
import { FaAndroid } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
 const Navlinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Integration", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#home" },
  { name: "Contact Us", href: "#home" },
];


  return (
    <div className="w-full h-auto lg:h-[90%] flex flex-col bg-[#EFEFEF] overflow-hidden mt-8 sm:mt-12 lg:mt-16">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-2/5 h-auto lg:h-full relative order-1 lg:order-1 px-4 lg:px-0 py-8 lg:py-0">
          {/* Text Content Positioned Above Bottom Image */}
          <div className="static lg:absolute lg:bottom-[50%] lg:left-1/2 lg:-translate-x-1/2 w-full flex flex-col items-center gap-6 lg:gap-10 z-30 px-4">
            <h1 className="uppercase font-bold leading-[100%] tracking-[-1.16px] text-[#8670E5] text-3xl sm:text-4xl lg:text-[46.9px] lg:-ml-32 text-center lg:text-left">
              Bc Appa
            </h1>
            <div className="w-full max-w-[370px] flex flex-col items-center text-center gap-6 lg:gap-8">
              <p className="text-sm sm:text-base lg:text-base leading-relaxed lg:leading-normal text-[#4A4A4A]">
                It is a long established fact that from will be distracted by
                the readable from when looking.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                <button className="bg-[#282C32] w-full sm:w-[157.99px] lg:w-[157.99px] h-14 rounded-full flex justify-center items-center gap-[6px]">
                  <AiFillApple className="text-xl text-white" />
                  <h2 className="font-semibold text-lg text-[#FFFFFF]">
                    App store
                  </h2>
                </button>
                <button className="bg-transparent w-full sm:w-[157.99px] lg:w-[157.99px] h-14 rounded-full flex justify-center items-center gap-[6px] border border-[#D3D3D3]">
                  <FaAndroid className="text-xl" />
                  <h2 className="font-semibold text-lg text-[#242331]">
                    Play store
                  </h2>
                </button>
              </div>
            </div>
          </div>

          {/* Left + Bottom Images - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <Image
              src="/left-footer.png"
              alt="left-footer"
              width={240}
              height={310}
              className="z-10 relative"
            />
            <Image
              src="/bottom-footer.png"
              alt="bottom-footer"
              width={470}
              height={312}
              className="absolute z-20 top-[50%] left-[30%] -translate-x-1/2"
            />
          </div>
        </div>

        {/* Middle Nav Section */}
        <div className="w-full lg:w-1/5 h-auto lg:h-full flex flex-col justify-start items-start mt-8 lg:mt-28 px-4 lg:px-0 order-2 lg:order-2">
          <div className="w-full lg:w-[85px] h-auto lg:h-14 flex flex-col gap-3 lg:gap-5">
            <h1 className="text-[#242331] font-bold text-2xl sm:text-3xl lg:text-[30px] leading-tight lg:leading-[38.4px]">
              Pages
            </h1>
            <div className="flex gap-3">
              <div className="h-[2px] w-6 bg-[#7444FD]"></div>
              <div className="h-[2px] w-14 bg-[#C2C2C2]"></div>
            </div>
          </div>
          <div
            className="w-full lg:w-[204px] mt-6 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-7 "
          >
            {Navlinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-2/5 h-auto lg:h-full relative overflow-hidden order-3 lg:order-3 px-4 lg:px-0 py-8 lg:py-0">
          <div className="hidden lg:block">
            <Image
              src="/right-footer.png"
              alt="right-footer"
              width={670}
              height={710}
              className="z-0"
            />
          </div>
          <div className="bg-white/60 lg:bg-white/60 w-full max-w-[503.67px] lg:w-[503.67px] h-auto lg:h-[394.67px] rounded-[20px] static lg:absolute lg:top-[28%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 p-6 sm:p-8 lg:p-10 flex flex-col gap-4 lg:gap-5 mx-auto lg:mx-0">
            <p className="font-medium text-sm sm:text-base lg:text-[16px] leading-[100%] text-[#5236FF]">
              Address
            </p>
            <h1 className="text-[#242331] font-bold text-xl sm:text-2xl lg:text-[30px] leading-tight lg:leading-[38.4px]">
              Ready to get started?
            </h1>
            <p className="text-sm sm:text-base lg:text-base leading-relaxed w-full lg:w-[340px]">
              It is a long established fact that a reader will be distracted
              layout.
            </p>
            <div className="flex gap-4 items-center">
              <MdEmail className="text-[#5236FF] text-lg" />
              <p className="text-sm sm:text-base lg:text-base leading-relaxed text-[#4A4A4A]">
                info@bcappa.com
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FiPhoneCall className="text-[#5236FF] text-lg" />
              <p className="text-sm sm:text-base lg:text-base leading-relaxed text-[#4A4A4A]">
                +880 123 654 789 00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-20 w-full flex items-center mt-8 lg:-mt-28 border-t border-[#FFFFFF] py-4 lg:py-0">
        <div className="w-full lg:w-[90%] flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-around items-center h-full gap-4 lg:gap-0 px-4 lg:px-0">
          <p className="text-sm sm:text-base lg:text-base leading-relaxed text-[#4A4A4A] text-center lg:text-left">
            Copyright © BC APPA All rights
          </p>
          <div className="flex justify-center lg:justify-around w-auto lg:w-[139px] gap-4 lg:gap-0">
            <FaFacebook className="text-[#4A4A4A] hover:text-[#7444FD] transition-colors cursor-pointer" />
            <FaTwitter className="text-[#4A4A4A] hover:text-[#7444FD] transition-colors cursor-pointer" />
            <FaLinkedin className="text-[#4A4A4A] hover:text-[#7444FD] transition-colors cursor-pointer" />
            <FaPinterestSquare className="text-[#4A4A4A] hover:text-[#7444FD] transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
