import React from 'react';
import { GoArrowRight } from "react-icons/go";
const Navbar = () => {
  return (
    <div className='h-[106px] w-full flex items-center justify-between px-[100px] font-[Urbanist]'>
      
      {/* Left Title */}
      <div className='w-[207px] h-14'>
        <h1 className='uppercase font-bold leading-[100%] tracking-[-1.16px] text-[#8670E5] text-[46.9px] text-center'>
          Bc Appa
        </h1>
      </div>

      <div className='flex items-center gap-[30px] h-full'>
        {[
          'Home',
          'About',
          'How it works',
          'Features',
          'Our App',
          'Blog',
          'Testimonials',
          "FAQ's",
        ].map((item, index) => (
          <div key={index} className='flex items-center justify-center h-full'>
            <p className='font-semibold text-[#282C32] leading-7 whitespace-nowrap'>
              {item}
            </p>
          </div>
        ))}
      </div>

      <button className='bg-[#8670E5] w-[157.99px] h-14 rounded-full flex justify-center items-center gap-[6px]'>
        <h2 className='font-semibold text-lg text-white'>Join Now</h2>
        <GoArrowRight className='text-white text-lg' />
      </button>
    </div>
  );
};

export default Navbar;
