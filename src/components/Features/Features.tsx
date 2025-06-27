import Overlay from "../Reuseables/Overlay";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-14 mb-10 gap-16 px-4 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 text-center">
        <Overlay text="Features" width={106} />
        <h2 className="head-h2 mt-4">Key Features</h2>
      </div>

      <div className="relative w-full max-w-[1450px] flex justify-center items-start gap-8 flex-wrap lg:flex-nowrap">
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
              <p className="para w-[260px]">
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
              <p className="para w-[260px]">
                Every participant is authenticated before joining.
              </p>
            </div>
          </div>
        </div>

        {/* Center Large Image */}
        <div className="relative w-[560px] h-[560px] z-10 -mt-10">
          <Image
            src="/dummy-pic.png"
            alt="Feature center"
            width={560}
            height={560}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-0 rounded-[30px]"
          />
        </div>

        {/* Right Feature Card */}
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
              <p className="para w-[280px] text-gray-600">
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
              <p className="para w-[260px]">
                Choose from Islamic savings circles with zero Riba (interest).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-start mt-20">
        <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Image
            src="/graph.png"
            alt="Bell"
            width={54}
            height={54}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
          <p className="para w-[280px] text-gray-600">
            Monitor all contributions and payouts with complete transparency.
          </p>
        </div>
      </div>
      
      <h2 className="text-[30px] font-bold leading-7 tracking-[-0.32px] text-[#282C32] text-center">
            📢 No more financial worries - BC Appa has you covered!
          </h2>
    </div>
  );
};

export default Features;
