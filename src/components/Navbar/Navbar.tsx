"use client"
import { useState } from "react"
import { GoArrowRight } from "react-icons/go"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const Navlinks = ["Home", "About", "How it works", "Features", "Our App", "Blog", "Testimonials", "FAQ's"]

  return (
    <div className="h-[80px] sm:h-[90px] lg:h-[106px] w-full flex items-center justify-between px-4 sm:px-6 lg:px-[100px] font-[Urbanist] relative z-50">
      <div className="w-auto lg:w-[207px] h-auto lg:h-14">
        <h1 className="uppercase font-bold leading-[100%] tracking-[-1.16px] text-[#8670E5] text-2xl sm:text-3xl lg:text-[46.9px] text-left lg:text-center">
          Bc Appa
        </h1>
      </div>
  <div className="hidden lg:flex items-center gap-[30px] h-full">
        {Navlinks.map((item, index) => (
          <div key={index} className="flex items-center justify-center h-full">
            <p className=" hover:text-[#8670E5] cursor-pointer font-semibold text-[#282C32] leading-7 whitespace-nowrap">{item}</p>
          </div>
        ))}
      </div>

      <button className="hidden lg:flex bg-[#8670E5] w-[157.99px] h-14 rounded-full justify-center items-center gap-[6px] cursor-pointer">
        <h2 className="font-semibold text-lg text-white">Join Now</h2>
        <GoArrowRight className="text-white text-lg" />
      </button>

      <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <HiX className="text-2xl text-[#282C32]" /> : <HiMenu className="text-2xl text-[#282C32]" />}
      </button>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
          <div className="flex flex-col py-4">
            {Navlinks.map((item, index) => (
              <div key={index} className="px-4 py-3 border-b border-gray-100 last:border-b-0">
                <p className="font-semibold text-[#282C32] leading-7">{item}</p>
              </div>
            ))}
            <div className="px-4 py-4">
              <button className="bg-[#8670E5] w-full h-12 rounded-full flex justify-center items-center gap-2">
                <h2 className="font-semibold text-base text-white">Join Now</h2>
                <GoArrowRight className="text-white text-base" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
