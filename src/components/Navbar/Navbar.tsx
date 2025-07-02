"use client";

import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import classNames from "classnames";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setShowBg(currentScrollY > 10);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Navlinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Our App", href: "#our-app" },
    { label: "Blog", href: "#blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ's", href: "#faqs" },
  ];

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        {
          "translate-y-0": isScrollingUp,
          "-translate-y-full": !isScrollingUp,
        }
      )}
    >
      {!showBg && (
        <>
          <Image
            src="/left-right-gradient-image.png"
            alt="Left gradient background"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover object-top -z-10"
          />
          <Image
            src="/hero-right-gradient-image.png"
            alt="Right gradient background"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
        </>
      )}

      <div
        className={classNames(
          "h-[80px] sm:h-[90px] lg:h-[106px] w-full flex items-center justify-between px-4 sm:px-6 lg:px-[100px] font-[Urbanist] transition-colors duration-300 backdrop-blur-md",
          {
            "bg-white shadow-md": showBg,
            "bg-transparent": !showBg,
          }
        )}
      >
        <div className="w-auto lg:w-[207px] h-auto lg:h-14">
          <h1 className="uppercase font-bold leading-[100%] tracking-[-1.16px] text-[#8670E5] text-2xl sm:text-3xl lg:text-[46.9px] text-left lg:text-center">
          <a href='#home' > Bc Appa </a>
          </h1>
        </div>

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
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="text-2xl text-[#282C32]" />
          ) : (
            <HiMenu className="text-2xl text-[#282C32]" />
          )}
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
                  <h2 className="font-semibold text-base text-white">
                    Join Now
                  </h2>
                  <GoArrowRight className="text-white text-base" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
