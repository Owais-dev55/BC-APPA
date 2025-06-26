import Image from "next/image"

const Counter = () => {
  const counter = [
    {
      counter: "56+",
      title: "Customers visit app every months",
    },
    {
      counter: "10k+",
      title: "Total downloaded of our app",
    },
    {
      counter: "156+",
      title: "Total Members of App Users",
    },
    {
      counter: "4.9",
      title: "Satisfaction rate from our customers.",
    },
  ]

  return (
    <div className="w-full h-[380px] flex justify-center items-center overflow-hidden font-[Urbanist]">
      <div className="relative w-full max-w-[1450px]">
        <Image
          src="/counter-image.png"
          alt="counter-image"
          width={1450}
          height={380}
          className=" object-cover rounded-[30px]"
        />
         <div className="absolute inset-0 flex items-center justify-center rounded-[30px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full max-w-[1600px] px-8 lg:px-16">
            {counter.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <h1 className="text-4xl lg:text-6xl xl:text-[80px] font-bold leading-tight tracking-[-1.6px] text-white mb-2">
                  {item.counter}
                </h1>
                <p className="font-medium text-sm lg:text-base leading-6 tracking-[-0.36px] text-white/90 max-w-[400px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
