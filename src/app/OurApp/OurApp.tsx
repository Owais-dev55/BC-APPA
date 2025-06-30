import Image from "next/image";
import Overlay from "@/components/Reuseables/Overlay";

const OurApp = () => {
  return (
    <div className="w-full bg-[#8670E5]  flex flex-col items-center py-10 sm:py-16">
      <div className="flex flex-col items-center gap-5 mt-8 sm:mt-10 px-4 max-w-4xl">
        <Overlay 
          text="Our App" 
          width={127} 
          color="#FFFFFF" 
          backgroundColor="rgba(255, 255, 255, 0.15)" 
        />
        <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center">
          Join BC Appa Today - Where Your Money Is Always Protected!
        </h2>
      </div>

      <div className="w-full max-w-[1450px] flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-10 md:mt-20 px-4">
        <div className="h-[500px] w-[240px] hidden lg:block">
          <Image
            src="/mobile-left.jpg"
            alt="App screenshot"
            width={240}
            height={500}
            className="object-cover rounded-[30px] h-full w-full"
          />
        </div>
        <div className="h-[500px] w-[240px] hidden lg:block">
          <Image
            src="/slider2.jpg"
            alt="App screenshot"
            width={240}
            height={500}
            className="object-cover rounded-[30px] h-full w-full"
          />
        </div>

        {/* Center phone - PERFECT FIT */}
        <div className="w-[280px] sm:w-[300px] relative aspect-[340/620]">
          {/* Screen - placed at the bottom of the stack */}
          <div className="absolute inset-0 flex items-center justify-center p-[8.2%] z-0">
            <div className="relative w-full h-full rounded-[30px] overflow-hidden">
              <Image
                src="/center-screen.jpg"
                alt="App screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Frame - placed on top with higher z-index */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/center-frame.png"
              alt="Phone frame"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right images - show only on large screens */}
        <div className="h-[500px] w-[240px] hidden lg:block">
          <Image
            src="/slider3.jpg"
            alt="App screenshot"
            width={240}
            height={500}
            className="object-cover rounded-[30px] h-full w-full"
          />
        </div>
        <div className="h-[500px] w-[240px] hidden lg:block">
          <Image
            src="/slider4.jpg"
            alt="App screenshot"
            width={240}
            height={500}
            className="object-cover rounded-[30px] h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurApp;