import Image from "next/image";
import Overlay from "@/components/Reuseables/Overlay";
const Features = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-8 sm:mt-12 lg:mt-14 mb-6 sm:mb-8 lg:mb-10 gap-8 sm:gap-12 lg:gap-16 px-4 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 text-center">
        <Overlay text="Features" width={106} />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-[-0.48px] text-[#282C32] mt-4">
          Key Features
        </h2>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden w-full max-w-[500px]">
        {/* Center Image for Mobile */}
        <div className="relative w-full flex justify-center mb-8">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] relative">
            <Image
              src="/dummy-pic.png"
              alt="Feature center"
              width={560}
              height={560}
              className="w-full h-full object-contain rounded-[20px]"
            />
          </div>
        </div>

        {/* All Feature Cards for Mobile */}
        <div className="flex flex-col gap-6">
          {/* Feature 1 */}
          <div className="flex gap-4 items-start">
            <div className="w-[60px] h-[60px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="/shield.png"
                alt="Shield"
                width={54}
                height={54}
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-lg font-semibold text-[#282C32]">
                Insurance-Backed Security
              </h3>
              <p className="text-sm leading-relaxed text-[#858585]">
                Your payout is covered, even if someone defaults.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4 items-start">
            <div className="w-[60px] h-[60px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="/tick.png"
                alt="Tick"
                width={54}
                height={54}
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-lg font-semibold text-[#282C32]">
                Fraud-Proof & Verified User
              </h3>
              <p className="text-sm leading-relaxed text-[#858585]">
                Every participant is authenticated before joining.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4 items-start">
            <div className="w-[60px] h-[60px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="/bell.png"
                alt="Bell"
                width={54}
                height={54}
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-lg font-semibold text-[#282C32]">
                Instant Notifications
              </h3>
              <p className="text-sm leading-relaxed text-[#858585]">
                Stay updated on every transaction.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-4 items-start">
            <div className="w-[60px] h-[60px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="/sharia.png"
                alt="Sharia"
                width={54}
                height={54}
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-lg font-semibold text-[#282C32]">
                Sharia-Compliant Options
              </h3>
              <p className="text-sm leading-relaxed text-[#858585]">
                Choose from Islamic savings circles with zero Riba (interest).
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex gap-4 items-start">
            <div className="w-[60px] h-[60px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="/graph.png"
                alt="Graph"
                width={54}
                height={54}
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-lg font-semibold text-[#282C32]">
                Real-Time Tracking
              </h3>
              <p className="text-sm leading-relaxed text-[#858585]">
                Monitor all contributions and payouts with complete
                transparency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - EXACTLY as original */}
      <div className="hidden lg:block">
        <div className="relative w-full max-w-[1450px] flex justify-center items-start gap-8 flex-wrap lg:flex-nowrap">
          {/* Left Feature Cards - ORIGINAL */}
          <div className="w-full max-w-[420px] flex flex-col gap-10 justify-center items-center mt-32">
            {/* Block 1 */}
            <div className="flex gap-5 items-start">
              <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/shield.png"
                  alt="Shield"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-semibold">
                  Insurance-Backed Security
                </h3>
                <p className="text-base leading-relaxed tracking-[-0.32px] text-[#858585] w-[260px]">
                  Your payout is covered, even if someone defaults.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex gap-5 items-start">
              <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/tick.png"
                  alt="Tick"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-semibold">
                  Fraud-Proof & Verified User
                </h3>
                <p className="text-base leading-relaxed tracking-[-0.32px] text-[#858585] w-[260px]">
                  Every participant is authenticated before joining.
                </p>
              </div>
            </div>
          </div>

          {/* Center Large Image - EXACTLY ORIGINAL */}
          <div className="relative w-[560px] h-[560px] z-10 -mt-10">
            <Image
              src="/dummy-pic.png"
              alt="Feature center"
              width={560}
              height={560}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-0 rounded-[30px] w-full h-full object-cover"
            />
          </div>

          {/* Right Feature Cards - ORIGINAL */}
          <div className="w-full max-w-[420px] flex flex-col gap-10 justify-center items-center mt-32">
            {/* Block 1 */}
            <div className="flex gap-5 items-start">
              <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/bell.png"
                  alt="Bell"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-semibold">Instant Notifications</h3>
                <p className="text-base leading-relaxed tracking-[-0.32px] text-[#858585] w-[280px]">
                  Stay updated on every transaction.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex gap-5 items-start">
              <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/sharia.png"
                  alt="Sharia"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-semibold">
                  Sharia-Compliant Options
                </h3>
                <p className="text-base leading-relaxed tracking-[-0.32px] text-[#858585] w-[260px]">
                  Choose from Islamic savings circles with zero Riba (interest).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Card - ORIGINAL */}
        <div className="flex gap-5 items-start mt-20 justify-center">
          <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Image
              src="/graph.png"
              alt="Graph"
              width={54}
              height={54}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 max-w-[300px]">
            <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
            <p className="text-base leading-relaxed tracking-[-0.32px] text-[#858585] w-[280px]">
              Monitor all contributions and payouts with complete transparency.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold leading-7 tracking-[-0.32px] text-[#282C32] text-center px-4">
        📢 No more financial worries - BC Appa has you covered!
      </h2>
    </div>
  );
};

export default Features;
