import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Counter from "@/components/Counter/Counter";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Mind from "@/components/Mind/Mind";
import Mind2 from "@/components/Mind/Mind2";
import OurApp from "@/components/OurApp/OurApp";
import Testimonial from "@/components/Testimonial/Testimonial";
import Vision from "@/components/Vision/Vision";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <>
   <Hero />
   <About />
   <Vision />
   <Counter />
   <Work />
   <Mind />
   <Features />
   <Mind2 />
   <OurApp />
   <Blog />
   <Testimonial />
    </>
  );
}
