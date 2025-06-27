import React from "react";
import Overlay from "../Reuseables/Overlay";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const Testimonial = () => {
  const testimonials = [
    {
      imageUrl: "/testimonial1.png",
      name: "Zara Noor",
      review:
        "I never have to worry about losing money again! Even when a member defaulted, my payout was fully covered.",
    },
    {
      imageUrl: "/testimonial2.png",
      name: "Abdullah Malik",
      review:
        "Finally, a Beesi platform that actually protects my savings. I can save stress-free!",
    },
    {
      imageUrl: "/testimonial3.png",
      name: "Hira Khan",
      review:
        "I never have to worry about losing money again! Even when a member defaulted, my payout was fully covered.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center font-[Urbanist] px-4 mt-10">
      <Image
        src="/left-right-gradient-image.png"
        alt="Left gradient background"
        fill
        className="object-cover -z-20"
      />
      <Image
        src="/hero-right-gradient-image.png"
        alt="Right gradient background"
        fill
        className="object-cover -z-10"
      />
      <div className="w-full max-w-[1450px] flex flex-col items-center justify-center text-center">
        <Overlay text="Testimonial" />
        <h2 className="head-h2 mt-4">What our clients say?</h2>

        <div className="w-full flex flex-wrap justify-center gap-7 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full max-w-[368px] h-[281px] rounded-[20px] bg-white/30 backdrop-blur-md p-6 flex flex-col gap-4 shadow-md"
            >
              <div className="flex items-center">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-[9px] object-cover"
                />
                <div className="ml-4 text-left">
                  <h1 className="font-semibold text-xl text-[#282C32]">
                    {testimonial.name}
                  </h1>
                  <p className="text-[#737373] text-sm">Team Leader</p>
                </div>
              </div>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    src="/star-icon.png"
                    alt="star"
                    width={16}
                    height={15}
                    key={i}
                  />
                ))}
              </div>
              <p className="text-[#282C32] text-[16px] leading-7 tracking-[-0.32px] text-left">
                {testimonial.review}
              </p>
                 <div className="flex justify-end">
                <Image src="/quotes.png" alt="quote" width={30} height={30} />
              </div>
            </div>
          ))}
        </div>
        <button className='bg-[#8670E5] w-[255.99px] h-14 rounded-full flex justify-center items-center gap-[6px] mt-20'>
        <h2 className='font-semibold text-lg text-white'>Join a Secure BC Now!</h2>
        <GoArrowRight className='text-white text-lg' />
      </button>
      </div>
    </div>
  );
};

export default Testimonial;
