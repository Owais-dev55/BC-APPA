"use client"
import { useState } from "react"
import { GoArrowRight } from "react-icons/go"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const Navlinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Our App", href: "#our-app" },
    { label: "Blog", href: "#blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ's", href: "#faqs" },
  ]

  return (
    <div className="h-[80px] sm:h-[90px] lg:h-[106px] w-full flex items-center justify-between px-4 sm:px-6 lg:px-[100px] font-[Urbanist] relative z-50">
      <div className="w-auto lg:w-[207px] h-auto lg:h-14">
        <h1 className="uppercase font-bold leading-[100%] tracking-[-1.16px] text-[#8670E5] text-2xl sm:text-3xl lg:text-[46.9px] text-left lg:text-center">
          Bc Appa
        </h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-[30px] h-full">
        {Navlinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-[#8670E5] cursor-pointer font-semibold text-[#282C32] leading-7 whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button className="hidden lg:flex bg-[#8670E5] w-[157.99px] h-14 rounded-full justify-center items-center gap-[6px] cursor-pointer">
        <h2 className="font-semibold text-lg text-white">Join Now</h2>
        <GoArrowRight className="text-white text-lg" />
      </button>

      {/* Mobile Menu Toggle */}
      <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <HiX className="text-2xl text-[#282C32]" /> : <HiMenu className="text-2xl text-[#282C32]" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
          <div className="flex flex-col py-4">
            {Navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-3 border-b border-gray-100 last:border-b-0 font-semibold text-[#282C32] leading-7"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
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
